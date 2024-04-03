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
export async function deleteTopic(id: string) {
    try {
        await db.topic.delete({ where: { id } });
        revalidatePath(paths.home());
    } catch (error) {
        return console.error(error);
    }
    
}
export async function findTopic(slug: string) {
    try {
        const topic = await db.topic.findFirst({ where: { slug } });
        return topic;
    } catch (error) {
        return console.error(error);
    }
}

export async function createPost(data: {
  slug: string;
  content: string;
  userId: string;
  topicId: string
}) {
  let post: Post
  try {
    post = await db.post.create({
      data: {
        slug: data.slug,
        content: data.content,
        userId: data.userId,
        topicId: data.topicId
      }
    })
  } catch (error) {
    return console.error(error)
  }
  revalidatePath(paths.topic(data.slug))
  // Time based revalidation for Home Page
}

export async function createComment() {
  // TODO: Revalidate the following: View a Post Page
  // Time based revalidation for Topic Show Page, Home Page
}
