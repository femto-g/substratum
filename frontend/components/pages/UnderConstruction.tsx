import Image from "next/image";

export default function UnderContruction() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h1 className="text-5xl">This page is currently under construction!</h1>
      <p className="text-2xl">Please come back later.</p>
      <Image
        src={"https://www.svgrepo.com/show/246184/construction-crane.svg"}
        alt={"Under construction"}
        height={500}
        width={500}
      />
    </div>
  );
}
