import Link from "next/link";

export default function Navlist() {
  //use Link later
  return (
    <span className="flex flex-row justify-between">
      <span>
        <a className="">About</a>
        <a className="">Docs </a>
      </span>
      <span className="">
        <a>Sign up</a>
        <a>Sign in</a>
      </span>
    </span>
  );
}
