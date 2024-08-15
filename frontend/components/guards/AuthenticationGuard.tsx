"use client";
import { SessionContext } from "@/context/SessionContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export function AuthenticationGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useContext(SessionContext);
  const router = useRouter();

  if (!session.isAuthenticated) {
    router.push("/login");
  }

  return children;
}
