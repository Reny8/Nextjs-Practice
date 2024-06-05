"use client";
import * as actions from "@/actions";
import "./NavBar.css";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const session = useSession();
  if (session.data?.user) {
    return (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <NavbarItem>
            <form action={actions.signOutAction}>
              <Button type="submit" variant="light" className="nav-bar-button">
                Sign Out
              </Button>
            </form>
          </NavbarItem>
        </PopoverContent>
      </Popover>
    );
  } else
    return (
      <form action={actions.signInAction}>
        <Button
          type="submit"
          className="nav-bar-button"
          color="secondary"
          isLoading={session.status === "loading"}
        >
          {session.status === "loading" ? "" : "Sign In"}
        </Button>
      </form>
    );
}
