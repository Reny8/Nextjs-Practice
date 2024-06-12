import { findPostAndComments } from "@/actions/functions";
import CommentCreateForm from "@/components/Comment/CommentCreateForm";
import CommentList from "@/components/Comment/CommentList";
import PostShow from "@/components/Post/PostShow";
import { Suspense } from "react";

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
            <PostShow
              params={{
                post: { title: content.slug, content: content.content },
              }}
            />
          </div>
          <div>
            <CommentCreateForm
              props={{ topicSlug: params.slug, postId: params.postId }}
            />
          </div>
        </div>
        <Suspense fallback={<div>Loading ... </div>}>
          <CommentList props={{ comments: content.comments }} />
        </Suspense>
      </div>
    );
  }
}
