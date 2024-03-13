import "./NavBar.css";
import Link from "next/link";
import { Navbar, NavbarContent, Input } from "@nextui-org/react";
import HeaderAuth from "./HeaderAuth";

export default async function NavBar() {
  return (
    <Navbar className="max-w-[100%]">
      <Link href="/">
        <h1>Discuss</h1>
      </Link>
      <NavbarContent justify="center">
        <Input type="text" placeholder="Search" className="w-96" />
      </NavbarContent>
      <NavbarContent justify="center">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
