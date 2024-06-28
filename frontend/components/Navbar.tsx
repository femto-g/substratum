import Navlist from "./Navlist";

export default function Navbar() {
  return (
    <div className="flex flex-row h-24">
      <div className="basis-1/4">Substratum - Logo</div>
      <div className="basis-3/4">
        <Navlist />
      </div>
    </div>
  );
}
