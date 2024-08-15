import { ForwardedRef, forwardRef } from "react";

export const FormSubmitInput = forwardRef(
  ({}, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      type="submit"
      ref={ref}
      className="bg-gray-200 rounded-lg px-5 w-full mt-5"
    />
  )
);

FormSubmitInput.displayName = "FormSubmitInput";
