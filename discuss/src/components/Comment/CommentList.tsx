"use client";
import { Comment } from "@prisma/client";

export default function CommentList({
  props,
}: {
  props: { comments: Comment[] };
}) {
  return (
    <div className="card" style={{ flex: 1 }}>
      <h1>
        All {props.comments?.length ? props.comments?.length : null} Comments
      </h1>
      <ul>
        {props.comments?.map((comment) => {
          return (
            <li key={comment.id}>
              <p>{comment.content}</p>
            </li>
          );
        })}
        {!props.comments?.length && <p>No Comments Yet</p>}
      </ul>
    </div>
  );
}
