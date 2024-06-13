"use client";
import { getAllPosts } from "@/actions/functions";
import paths from "@/path";
import CustomTitle from "../CustomTitle";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function TopPostDisplay({
  title,
  topicId,
}: {
  title?: string;
  topicId?: string;
}) {
  const [posts, setPosts] = useState<Awaited<ReturnType<typeof getAllPosts>>>(
    []
  );
  const query = useSearchParams().get("term") || "";
  async function getPosts() {
    try {
      const response = await getAllPosts(title, topicId, query);
      setPosts(response);
    } catch (error) {
      return console.error(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, [window.location.search]);

  return (
    <div className="col-span-3 card">
      <CustomTitle title={title || "Feed"} />
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
