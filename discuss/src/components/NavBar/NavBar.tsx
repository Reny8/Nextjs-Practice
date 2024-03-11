import * as actions from "@/actions";
import "./NavBar.css";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
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
    <Navbar>
      <Link href="/">
        <h1>Discuss</h1>
      </Link>
      <NavbarContent justify="center">
        <Input type="text" placeholder="Search" />
      </NavbarContent>
      <NavbarContent justify="center">
        {session?.user ? (
          <form action={actions.signOutAction}>
            <Avatar src={session.user.image} />
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
