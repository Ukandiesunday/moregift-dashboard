import * as yup from "yup";

// regular expression
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

// signup schema
export const signUpSchema = yup.object().shape({
  organisationName: yup
    .string()
    .min(4, "Must have at least four characters")
    .max(200)
    .required("Enter your organization name."),
  username: yup
    .string()
    .min(4, "Must have at least four characters")
    .max(10)
    .required("Username is required"),
  email: yup
    .string()
    .email("Enter a valid email.")
    .required("Email is required. "),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 characters containing uppercase, lowercase, digit, special character"
    )
    .min(
      8,
      "Password must be at least 8 characters containing uppercase, lowercase, digit, special character"
    )
    .max(32)
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password don't match.")
    .required("Confirm password."),
});

// login schema
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter your registered email")
    .required("Email is required"),
  password: yup.string().min(8).max(32).required("Password is required"),
});

// forgot Password Schema

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter  your registered email")
    .required("Email is reqiured"),
});

// reset Password Schema

export const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 characters containing uppercase, lowercase, digit, special character"
    )
    .min(
      8,
      "Password must be at least 8 characters containing uppercase, lowercase, digit, special character"
    )
    .max(32)
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Password don't match.")
    .required("Confirm password."),
});

// verify Email Schema

export const verifyEmailSchema = yup.object().shape({
  token: yup.number().required("Code is required"),
  email: yup
    .string()
    .email("Enter your registered email")
    .required("Email is required"),
});

// pin validation
export const pinValidation = yup.object().shape({
  pin: yup.number().required("Pin is required"),
});
