import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export const db = new PrismaClient();

export interface Snippet {
  title: string;
  code: string;
}

export async function createSnippet(body: Snippet) {
  try {
    await db.snippet.create({
      data: body,
    });
    revalidatePath("/");
  } catch (error) {
    return console.log(error);
  }
  redirect("/");
}

export async function getAllSnippets() {
  try {
    const snippets = await db.snippet.findMany();
    return snippets;
  } catch (error) {
    return console.log(error);
  }
}

export async function getSnippetById(id: number) {
  try {
    const snippet = await db.snippet.findUnique({
      where: {
        id,
      },
    });
    return snippet;
  } catch (error) {
    return console.log(error);
  }
}

export async function updateSnippet(id: number, body: Snippet) {
  try {
    const snippet = await db.snippet.update({
      where: {
        id,
      },
      data: body,
    });
    revalidatePath(`/snippets/${id}`)
    revalidatePath("/");
    return snippet;
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteSnippet(id: number) {
  try {
    await db.snippet.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
  } catch (error) {
    return console.log(error);
  }
  redirect("/");
}
