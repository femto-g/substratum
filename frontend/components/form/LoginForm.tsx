"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "@packages/common";
import { FormTextInput } from "./FormTextInput";
import { FormPasswordInput } from "./FormPasswordInput";
import { FormSubmitInput } from "./FormSubmitInput";
import { login } from "@/api/methods";
import { ErrorText } from "./ErrorText";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userLoginSchema),
  });

  const router = useRouter();

  //const onSubmit = (data: any) => console.log(data);

  const queryClient = useQueryClient();

  const onSubmit = async (data: any) => {
    const response = await login(data);
    if (response.status == 401) {
      setError("root.serverError", {
        type: response.status.toString(),
        message: "Username or Password is incorrect. Please try again.",
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
        <FormSubmitInput />
      </form>
    </div>
  );
}
