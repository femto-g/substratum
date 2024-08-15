import PageContainer from "@/components/container/PageContainer";
import SignUpForm from "@/components/form/SignUpForm";
import Heading1 from "@/components/heading/Heading1";

export default function Page() {
  return (
    <PageContainer>
      <Heading1>Sign Up</Heading1>
      <div className="w-2/5 mx-auto mt-10">
        <SignUpForm />
      </div>
    </PageContainer>
  );
}
