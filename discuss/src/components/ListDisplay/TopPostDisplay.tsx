import { findUserName, getAllPosts } from "@/actions/functions";

export default async function TopPostDisplay({ title, topicId }: { title?: string, topicId?: string}) {
  let posts = await getAllPosts(title, topicId) || []
  async function getUserName(userId: string) {
    let response = await findUserName(userId)
    return response || ""
  }
  return (
    <div className="col-span-3 card">
      <h1 className="text-xl m-2">
        {title !== undefined ? title : "Feed"}
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.slug}</h1>
            <div className="post-subtitle-box">
              <p>By: {getUserName(post.userId)}</p>
              {/* NEED TO RETURN REPLACE WITH REAL AMOUNT */}
              <p>1 comment</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
