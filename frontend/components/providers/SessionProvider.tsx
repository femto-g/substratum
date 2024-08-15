"use client";
import { getSession } from "@/api/methods";
import { Session, SessionContext } from "@/context/SessionContext";
import { useQuery } from "@tanstack/react-query";

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["session"],
    queryFn: async () => await getSession(),
    staleTime: 1000 * 60 * 30,
  });

  if (isError) {
  }

  if (isPending) {
    return <h1>Loading</h1>;
  }

  return (
    <SessionContext.Provider value={data!}>{children}</SessionContext.Provider>
  );
}
