import * as actions from "@/actions";
import "./NavBar.css";
import Link from "next/link";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
interface NavBarProps {
  auth: () => Promise<any>;
}

export default async function NavBar(props: NavBarProps) {
  const session = await props.auth();
  return (
    <Navbar className="max-w-[100%]">
      <Link href="/">
        <h1>Discuss</h1>
      </Link>
      <NavbarContent justify="center">
        <Input type="text" placeholder="Search" className="w-96"/>
      </NavbarContent>
      <NavbarContent justify="center">
        {session?.user ? (
          <form action={actions.signOutAction}>
            <Button type="submit" variant="flat" className="avatar">
            <Avatar src={session.user.image} />
            </Button>
          </form>
        ) : (
          <form action={actions.signInAction}>
            <Button type="submit" className="nav-bar-button">
              Sign In
            </Button>
          </form>
        )}
      </NavbarContent>
    </Navbar>
  );
}
