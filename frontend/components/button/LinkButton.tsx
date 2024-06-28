import Link from "next/link";
import { Children } from "react";

export default function LinkButton({
  href,
  color,
  children,
}: {
  href: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl">
      <Link href={href}>{children}</Link>
    </div>
  );
}
