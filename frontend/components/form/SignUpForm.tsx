"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignUpSchema } from "@packages/common";
import { FormTextInput } from "./FormTextInput";
import { FormPasswordInput } from "./FormPasswordInput";
import { FormSubmitInput } from "./FormSubmitInput";
import { ErrorText } from "./ErrorText";
import { useQueryClient } from "@tanstack/react-query";
import { login, signup } from "@/api/methods";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSignUpSchema),
  });

  const router = useRouter();
  const queryClient = useQueryClient();

  const onSubmit = async (data: any) => {
    const response = await signup(data);
    if (response.status == 401) {
      setError("root.serverError", {
        type: response.status.toString(),
        message: "This username already exists.",
      });
    } else if (response.status > 401) {
      setError("root.serverError", {
        type: response.status.toString(),
        message: "An Error occured. Please try again later.",
      });
    } else if (response.ok) {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <ErrorText>{errors.root?.serverError.message as string}</ErrorText>
        <FormTextInput label="Username" {...register("username")} />
        <ErrorText>{errors.username?.message as string}</ErrorText>
        <FormPasswordInput label="Password" {...register("password")} />
        <ErrorText>{errors.password?.message as string}</ErrorText>
        <FormPasswordInput
          label="Confirm Password"
          {...register("confirmPassword")}
        />
        <ErrorText>{errors.confirmPassword?.message as string}</ErrorText>
        <FormSubmitInput />
      </form>
    </div>
  );
}
