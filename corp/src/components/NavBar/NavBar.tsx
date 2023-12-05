import Link from "next/link";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link href="/">
        {" "}
        <h1>Cloud Corp</h1>
      </Link>

      <ul>
        <li>
          <Link href="/performance">Performance</Link>
        </li>
        <li>
          <Link href="/reliability">Reliability</Link>
        </li>
        <li>
          <Link href="/scale">Scale</Link>
        </li>
      </ul>
    </nav>
  );
}
