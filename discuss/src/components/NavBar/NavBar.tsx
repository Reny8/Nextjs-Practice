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
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
interface NavBarProps {
  auth: () => Promise<any>;
}

export default async function NavBar(props: NavBarProps) {
  const session = await props.auth();
  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar src={session.user.image} />
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
  } else {
    authContent = (
      <form action={actions.signInAction}>
        <Button type="submit" className="nav-bar-button" color="secondary">
          Sign In
        </Button>
      </form>
    );
  }
  return (
    <Navbar className="max-w-[100%]">
      <Link href="/">
        <h1>Discuss</h1>
      </Link>
      <NavbarContent justify="center">
        <Input type="text" placeholder="Search" className="w-96" />
      </NavbarContent>
      <NavbarContent justify="center">{authContent}</NavbarContent>
    </Navbar>
  );
}
