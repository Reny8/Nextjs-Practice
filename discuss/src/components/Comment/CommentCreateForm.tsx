import { AddCircle } from "@/icons/AddCircle";
import { Button, Textarea } from "@nextui-org/react";

export default function CommentCreateForm({}) {
  return (
    <form className="add-comment-form">
      <Textarea type="text" label="Reply Here" minRows={5} />
      <Button variant="light" isIconOnly className="add-button">
        <AddCircle />
      </Button>
    </form>
  );
}
