import PageContainer from "@/components/container/PageContainer";
import LoginForm from "@/components/form/LoginForm";
import Heading1 from "@/components/heading/Heading1";

export default function Page() {
  return (
    <PageContainer>
      <Heading1>Log In</Heading1>
      <div className="w-2/5 mx-auto mt-10">
        <LoginForm />
      </div>
    </PageContainer>
  );
}
