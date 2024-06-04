import { findPostAndComments } from "@/actions/functions";
import { AddCircle } from "@/icons/AddCircle";
import { Button, Textarea } from "@nextui-org/react";

export default async function PostShowPage({
  params,
}: {
  params: { postId: string; slug: string };
}) {
  const content = await findPostAndComments(params.postId);
  if (content) {
    return (
      <div className="page">
        <div className="card spaced-items">
          <div>
            <h1>{content.post?.slug || ""} </h1>
            <p>{content.post?.content || ""}</p>
          </div>
          <div>
            <form className="add-comment-form">
              <Textarea type="text" placeholder="Reply Here" minRows={5} />
              <Button variant="light" isIconOnly className="add-button">
                <AddCircle />
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
