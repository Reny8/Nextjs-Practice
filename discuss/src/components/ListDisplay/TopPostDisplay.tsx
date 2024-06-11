import { findTopic, findUserName, getAllPosts } from "@/actions/functions";
import paths from "@/path";
export default async function TopPostDisplay({
  title,
  topicId,
}: {
  title?: string;
  topicId?: string;
}) {
  let posts = (await getAllPosts(title, topicId)) || [];
  return (
    <div className="col-span-3 card">
      <h1 className="text-xl m-2">{title !== undefined ? title : "Feed"}</h1>
      <ul>
        {posts.map((post) => {
          return (
            <a
              href={paths.postShow(post.topic?.slug || "", post.id)}
              key={post.id}
            >
              <li>
                <h1>{post.slug}</h1>
                <div className="post-subtitle-box">
                  <p>By: {post.user.name}</p>
                  <p>{post._count.comments} comment</p>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
