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
  try {
    await db.post.create({
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
type PostPayload = Post & {
  topic: { slug: string };
  user: { name: string | null; image: string | null };
  _count: { comments: number };
};

export async function getAllPosts(
  title: string | undefined,
  topicId?: string,
  query?: string
): Promise<PostPayload[] | []> {
  const baseQuery = {
    include: {
      topic: { select: { slug: true } },
      user: {
        select: { name: true, image: true },
      },
      _count: { select: { comments: true } },
      take: 4,
    },
  };
  try {
    if (query) {
      return await db.post.findMany({
        where: {
          OR: [{ content: { contains: query } }, { slug: { contains: query } }],
        },
        ...baseQuery,
      });
    } else if (!topicId && !title) {
      return await db.post.findMany(baseQuery);
    } else {
      return await db.post.findMany({
        where: { topic: { id: topicId } },
        ...baseQuery,
      });
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function findPostAndComments(postId: string) {
  try {
    const post = await db.post.findFirst({
      where: { id: postId },
      include: {
        comments: true,
      },
    });
    return post;
  } catch (error) {
    return console.error(error);
  }
}
