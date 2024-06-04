import { findPostAndComments } from "@/actions/functions";
import CommentCreateForm from "@/components/Comment/CommentCreateForm";

export default async function PostShowPage({
  params,
}: {
  params: { postId: string; slug: string };
}) {
  const content = await findPostAndComments(params.postId);
  if (content) {
    return (
      <div className="page spaced-items">
        <div className="card spaced-items">
          <div>
            <h1>{content.post?.slug || ""} </h1>
            <p>{content.post?.content || ""}</p>
          </div>
          <div>
            <CommentCreateForm />
          </div>
        </div>
        <div className="card">
          <h1>
            All {content.comments?.length ? content.comments?.length : null}{" "}
            Comments
          </h1>
        </div>
      </div>
    );
  }
}
