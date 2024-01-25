import { Button } from "@nextui-org/button";
import * as actions from "@/actions";
import "./NavBar.css";
interface NavBarProps {
  auth: () => Promise<any>;
}

export default async function NavBar(props: NavBarProps) {
  const session = await props.auth();
  return (
    <nav>
      <h1>Discuss</h1>
      <input type="text" placeholder="Search" />
      {session?.user ? (
        <form action={actions.signOutAction}>
          <Button type="submit" className="nav-bar-button">
            Sign Out
          </Button>
        </form>
      ) : (
        <form action={actions.signInAction}>
          <Button type="submit" className="nav-bar-button">
            Sign In
          </Button>
        </form>
      )}
    </nav>
  );
}
