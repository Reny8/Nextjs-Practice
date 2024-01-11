import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
export const db = new PrismaClient();

interface Snippet {
  title: string;
  code: string;
}

export async function createSnippet(body: Snippet) {
  try {
    const newSnippet = await db.snippet.create({
      data: body,
    });
    console.log(newSnippet);
  } catch (error) {
    console.log(error);
  }
  redirect('/');
}
