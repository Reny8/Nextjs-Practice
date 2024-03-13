"use client";
import { useSession } from "next-auth/react";
import NotAllowed from "../NotAllowed";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return <div>User is signed in!</div>;
  } else return <NotAllowed />;
}
