import { findPostAndComments } from "@/actions/functions";
import CommentCreateForm from "@/components/Comment/CommentCreateForm";
import CommentList from "@/components/Comment/CommentList";

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
            <CommentCreateForm
              props={{ topicSlug: params.slug, postId: params.postId }}
            />
          </div>
        </div>
        <CommentList props={{ comments: content.comments }} />
      </div>
    );
  }
}
