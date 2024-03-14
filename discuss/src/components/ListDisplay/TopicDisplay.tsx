import Link from "next/link";
import { getAllTopics } from "@/actions";
import paths from "@/path";
import React from "react";
import { ChevronRightIcon } from "@/icons/ChevronRightIcon";
export default async function TopicDisplay() {
  const topics = await getAllTopics();
  if (!topics) return <div className="card">Add A Topic Above</div>;
  return (
    <div className="card">
      <h1 className="flex items-center justify-center mb-1">Topics</h1>
      <ul>
        {topics.map((item) => {
          return (
            <li key={item.id}>
              <Link href={paths.topic(item.slug)}>{item.slug}</Link>
              <ChevronRightIcon />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
