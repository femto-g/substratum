import { ForwardedRef, forwardRef } from "react";
import { ChangeHandler } from "react-hook-form";

interface FormPasswordInputProps {
  label: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
}

export const FormPasswordInput = forwardRef(
  (
    { label, ...props }: FormPasswordInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <label className="flex flex-col">
      {label}
      <input
        type="password"
        ref={ref}
        {...props}
        className="rounded-md border-2 border-gray-300"
      />
    </label>
  )
);

FormPasswordInput.displayName = "FormPasswordInput";
