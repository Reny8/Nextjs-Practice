import "./NavBar.css";
import Link from "next/link";
import { Navbar, NavbarContent } from "@nextui-org/react";
import HeaderAuth from "./HeaderAuth";
import SearchInput from "./SearchInput";

export default async function NavBar() {
  return (
    <Navbar className="max-w-[100%]">
      <Link href="/">
        <h1>Discuss</h1>
      </Link>
      <NavbarContent justify="center">
        <SearchInput />
      </NavbarContent>
      <NavbarContent justify="center">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
