import Link from "next/link";

export default function Navlist() {
  //use Link later
  return (
    <span className="flex flex-row justify-between">
      <span className="flex gap-6">
        <a className="">About</a>
        <a className="">Docs </a>
      </span>
      <span className="flex gap-6">
        <a>Sign up</a>
        <a>Sign in</a>
      </span>
    </span>
  );
}
