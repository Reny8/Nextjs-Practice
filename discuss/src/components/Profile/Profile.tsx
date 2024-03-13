"use client";
import { useSession } from "next-auth/react";
import NotAllowed from "../NotAllowed";
import NewTopic from "../Popups/NewTopic";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return (
      <div>
        <NewTopic />
      </div>
    );
  } else return <NotAllowed />;
}
