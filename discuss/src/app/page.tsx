import { auth } from "@/auth";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "@/components/Profile/Profile";
export default async function Home() {
  return (
    <div>
      <NavBar auth={auth} />
      <Profile/>
    </div>
  );
}
