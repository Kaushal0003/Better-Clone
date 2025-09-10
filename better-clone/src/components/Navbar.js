import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/calculator">Calculator</Link>
      <Link href="/start">Start</Link>
    </nav>
  );
}
