import { ForwardedRef, forwardRef } from "react";
import { ChangeHandler } from "react-hook-form";

interface FormTextInputProps {
  label: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
}

export const FormTextInput = forwardRef(
  (
    { label, ...props }: FormTextInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <label className="flex flex-col">
      {label}
      <input
        type="text"
        ref={ref}
        {...props}
        className="rounded-md border-2 border-gray-300"
      />
    </label>
  )
);

FormTextInput.displayName = "FormTextInput";
