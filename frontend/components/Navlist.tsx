import Link from "next/link";

export default function Navlist() {
  //use Link later
  return (
    <span className="flex flex-row justify-between">
      <span className="flex gap-6">
        <Link href={"/about"}>About</Link>
        <Link href={"/docs"}>Docs</Link>
      </span>
      <span className="flex gap-6">
        <Link href={"/signup"}>Sign Up</Link>
        <Link href={"/login"}>Log In</Link>
      </span>
    </span>
  );
}
