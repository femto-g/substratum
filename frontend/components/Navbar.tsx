import Link from "next/link";
import Navlist from "./Navlist";
import IconImage from "./image/IconImage";

export default function Navbar() {
  return (
    <div className="flex flex-row h-20 font-semibold text-lg px-10 py-1 items-center">
      <div className="basis-1/4">
        <Link href="/">
          <div className=" flex flex-row items-center gap-3">
            <IconImage
              src="/substratum.svg"
              alt="substratum"
              height={40}
              width={40}
            />
            Substratum
          </div>
        </Link>
      </div>
      <div className="basis-3/4">
        <Navlist />
      </div>
    </div>
  );
}
