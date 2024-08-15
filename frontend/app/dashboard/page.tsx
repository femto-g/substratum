"use client";
import PageContainer from "@/components/container/PageContainer";
import { AuthenticationGuard } from "@/components/guards/AuthenticationGuard";
import Heading1 from "@/components/heading/Heading1";
import { SessionContext } from "@/context/SessionContext";
import { useContext } from "react";

export default function Page() {
  const session = useContext(SessionContext);
  return (
    <AuthenticationGuard>
      <PageContainer>
        <Heading1>DashBoard</Heading1>
        <p>Hello {session.user}, This is your dashboard</p>
      </PageContainer>
    </AuthenticationGuard>
  );
}
