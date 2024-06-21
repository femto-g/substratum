import Navlist from "./Navlist";

export default function Navbar() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4">Name of app - Logo</div>
      <div className="basis-3/4">
        <Navlist />
      </div>
    </div>
  );
}
