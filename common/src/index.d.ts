import {
  userSchema,
  numberSchema,
  stringSchema,
  userSignUpSchema,
  userLoginSchema,
} from "./types";
declare module "@packages/common" {
  export {
    userSchema,
    numberSchema,
    stringSchema,
    userSignUpSchema,
    userLoginSchema,
  };
}
