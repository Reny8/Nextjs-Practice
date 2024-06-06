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
  async function getUserName(userId: string) {
    let response = await findUserName(userId);
    return response?.name || "";
  }
  async function getTopicSlug(topicId: string) {
    let topic = await findTopic(topicId, "id");
    const slug = topic?.slug;
    return slug || "";
  }
  return (
    <div className="col-span-3 card">
      <h1 className="text-xl m-2">{title !== undefined ? title : "Feed"}</h1>
      <ul>
        {posts.map(async (post) => {
          const slug = await getTopicSlug(post.topicId);
          return (
            <a href={paths.postShow(slug, post.id)}>
              <li key={post.id}>
                <h1>{post.slug}</h1>
                <div className="post-subtitle-box">
                  <p>By: {getUserName(post.userId)}</p>
                  {/* NEED TO RETURN REPLACE WITH REAL AMOUNT */}
                  <p>1 comment</p>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
