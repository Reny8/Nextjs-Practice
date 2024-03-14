"use client";
import { useSession } from "next-auth/react";
import NotAllowed from "../NotAllowed";
import NewTopic from "../Popups/NewTopic";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return (
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <h1 className="text-xl m-2">Placeholder</h1>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <NewTopic />
        </div>
      </div>
    );
  } else return <NotAllowed />;
}
