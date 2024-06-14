"use client";
import { getAllPosts } from "@/actions/functions";
import paths from "@/path";
import CustomTitle from "../CustomTitle";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, Skeleton } from "@nextui-org/react";
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
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams().get("term") || "";
  async function getPosts() {
    try {
      setLoading(true);
      const response = await getAllPosts(title, topicId, searchParams);
      setPosts(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  function PostLoader() {
    return (
      <li>
        <Card shadow="none" className="loader-card">
          <Skeleton className="h-10 w-3/5 rounded-lg mb-4 skeleton-text" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-20 rounded-md skeleton-text" />
            <Skeleton className="h-4 w-20 rounded-md skeleton-text" />
          </div>
        </Card>
      </li>
    );
  }

  return (
    <div className="col-span-3 card">
      <CustomTitle title={title || "Feed"} />
      <ul>
        {loading && (
          <>
            <PostLoader />
            <PostLoader />
            <PostLoader />
            <PostLoader />
          </>
        )}
        {!loading &&
          posts &&
          posts.map((post) => {
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
