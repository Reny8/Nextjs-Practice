"use server";
import { z } from "zod";
import type { Post, Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import paths from "@/path";

const createTopicSchema = z.object({
  title: z
    .string()
    .min(3)
    .regex(/^[A-Za-z.\s_-]+$/, {
      message: "Title cannot contain special characters",
    }),
  description: z.string().min(10),
});

export async function createTopic(data: {
  title: string;
  description: string;
}) {
  let topic: Topic;
  try {
    let result = createTopicSchema.safeParse(data);
    if (!result.success) return console.log(result.error.flatten().fieldErrors);
    topic = await db.topic.create({
      data: {
        slug: result.data.title,
        description: result.data.description,
      },
    });
  } catch (error) {
    return console.error(error);
  }
  revalidatePath(paths.home());
  redirect(paths.topic(topic.slug));
}

export async function getAllTopics() {
  try {
    const topics = await db.topic.findMany();
    return topics;
  } catch (error) {
    return console.error(error);
  }
}
export async function updateTopic(data: {
  id: string;
  title: string;
  description: string;
}) {
  try {
    await db.topic.update({
      where: { id: data.id },
      data: {
        slug: data.title,
        description: data.description,
      },
    });
  } catch (error) {
    return console.error(error);
  }
  revalidatePath(paths.topic(data.title));
}
export async function deleteTopic(id: string) {
  try {
    await db.topic.delete({ where: { id } });
    revalidatePath(paths.home());
  } catch (error) {
    return console.error(error);
  }
}
export async function findTopic(slug: string, type: string = "slug") {
  try {
    const topic = await db.topic.findFirst({ where: { [type]: slug } });
    return topic;
  } catch (error) {
    return console.error(error);
  }
}

export async function createPost(data: {
  slug: string;
  content: string;
  userId: string;
  topicId: string;
}) {
  let post: Post;
  try {
    post = await db.post.create({
      data: {
        slug: data.slug,
        content: data.content,
        userId: data.userId,
        topicId: data.topicId,
      },
    });
  } catch (error) {
    return console.error(error);
  }
  revalidatePath(paths.topic(data.slug));
  // Time based revalidation for Home Page
}

export async function createComment(data: FormData) {
  try {
    await db.comment.create({
      data: {
        content: data.get("content") as string,
        postId: data.get("postId") as string,
        userId: data.get("userId") as string,
      },
    });
  } catch (error) {
    return console.error(error);
  }
  revalidatePath(
    paths.postShow(
      data.get("topicSlug") as string,
      data.get("postId") as string
    )
  );
  // Time based revalidation for Topic Show Page, Home Page
}
export async function findUserName(userId: string) {
  try {
    const user = await db.user.findFirst({ where: { id: userId } });
    return {
      name: user?.name || "Unknown",
      image:
        user?.image ||
        "https://th.bing.com/th/id/OIP.uQ4DG8iPTlnHC-dBRiRHjwHaHa?rs=1&pid=ImgDetMain",
    };
  } catch (error) {
    return {
      name: "Unknown",
      image:
        "https://th.bing.com/th/id/OIP.uQ4DG8iPTlnHC-dBRiRHjwHaHa?rs=1&pid=ImgDetMain",
    };
  }
}
interface PostPayload {
  id: string;
  slug: string;
  content: string;
  topic: {
    slug: string;
  };
  _count: {
    comments: number;
  };
  user: {
    name: string;
    image: string;
  };
}

export async function getAllPosts(title: string | undefined, topicId?: string) {
  // Show top 4 posts based on most comments
  try {
    const posts =
      !title && !topicId
        ? await db.post.findMany()
        : await db.post.findMany({ where: { topicId: topicId } });
    return formatPostResponse(posts, !topicId ? true : false);
  } catch (error) {
    return console.log(error);
  }
}
async function formatPostResponse(posts: Post[], byTopic?: boolean) {
  let formattedPosts: PostPayload[] = [];
  for (let post of posts) {
    const user = await findUserName(post.userId);
    const commentsCount = await db.comment.count({
      where: { postId: post.id },
    });
    const topicSlug = byTopic
      ? (await findTopic(post.topicId, "id"))?.slug
      : "";
    formattedPosts.push({
      id: post.id,
      slug: post.slug,
      content: post.content,
      _count: { comments: commentsCount },
      topic: { slug: topicSlug || "" },
      user: { name: user.name, image: user.image },
    });
  }
  return formattedPosts;
}
export async function findPostAndComments(postId: string) {
  try {
    const post = await db.post.findFirst({ where: { id: postId } });
    const comments = await db.comment.findMany({ where: { postId: postId } });
    return { post, comments };
  } catch (error) {
    return console.error(error);
  }
}
