import { findUserName } from "@/actions/functions";
import { Avatar, Button } from "@nextui-org/react";
import { Comment } from "@prisma/client";
export default function CommentList({
  props,
}: {
  props: { comments: Comment[] };
}) {
  async function findUser(id: string) {
    let response: { name: string; image: string } = { name: "", image: "" };
    try {
      response = await findUserName(id);
    } catch (error) {
      console.log(error);
    } finally {
      return response;
    }
  }
  return (
    <div className="card" style={{ flex: 1 }}>
      <h1>
        All {props.comments?.length ? props.comments?.length : null} Comments
      </h1>
      <ul id="comment-display">
        {props.comments?.map(async (comment) => {
          return (
            <li key={comment.id}>
              <div>
                <Avatar
                  src={(await findUser(comment.userId))?.image}
                  alt="Profile Picture"
                />
              </div>
              <div>
                <small>{(await findUser(comment.userId))?.name}</small>
                <p>{comment.content}</p>
                <Button variant="light" size="sm" color="primary">
                  Reply
                </Button>
              </div>
            </li>
          );
        })}
        {!props.comments?.length && <p>No Comments Yet</p>}
      </ul>
    </div>
  );
}
