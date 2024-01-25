import { auth } from "@/auth";
import NavBar from "@/components/NavBar/NavBar";
export default async function Home() {
  const session = await auth();
  return (
    <div>
      <NavBar auth={auth} />
    </div>
  );
}
