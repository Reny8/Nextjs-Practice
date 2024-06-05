"use client";
import { createComment } from "@/actions";
import { AddCircle } from "@/icons/AddCircle";
import { Button, Textarea } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRef } from "react";
export default function CommentCreateForm({
  props,
}: {
  props: { topicSlug: string; postId: string };
}) {
  const session = useSession();
  const form = useRef<HTMLFormElement | null>(null);
  async function handleClick(data: FormData) {
    data.append("topicSlug", props.topicSlug);
    data.append("userId", session?.data?.user?.id as string);
    data.append("postId", props.postId);
    try {
      await createComment(data);
    } catch (error) {
      console.log(error);
    } finally {
      form.current?.reset();
    }
  }
  return (
    <form className="add-comment-form" action={handleClick} ref={form}>
      <Textarea type="text" label="Reply Here" minRows={5} name="content" />
      <Button variant="light" isIconOnly className="add-button" type="submit">
        <AddCircle />
      </Button>
    </form>
  );
}
