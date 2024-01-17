import { Button } from "@nextui-org/button";
import * as actions from "@/actions";
export default function Home() {
  return (
    <div>
      <form action={actions.signInAction}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOutAction}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}
