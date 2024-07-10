import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HamburgerButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler;
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
    setClicked((toggle) => !toggle);
  };

  const path = usePathname();
  useEffect(() => {
    setClicked(false);
  }, [path]);

  return (
    <div>
      <button
        onClick={handleClick}
        className={
          "rounded-md transition-transform " + (clicked ? "rotate-90 " : "")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}
