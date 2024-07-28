"use client";
import Image from "next/image";
import styles from "./forgotpassword.module.scss";
import Button from "../../../components/button/Button";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "../../../schema/formschema/formSchema";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { postData } from "@/api/request";
import { TextInput } from "@/components";
import { FORGOTPASSWORD_URL } from "@/env";
import { storeItem } from "@/utility/storage";
import AuthDesign from "@/components/authDesign/AuthDesign";

const ForgotPassword = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // form validation

  const {
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    formState,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // handle forgot password submission

  const forgotPasswordHandler = async (value: any) => {
    const endpoint: string = FORGOTPASSWORD_URL;
    console.log(value);
    const data = {
      email: value?.email,
    };

    storeItem("email", value.email);
    try {
      const result: any | undefined = await postData(endpoint, data);
      console.log(data);
      if (result.status === 201) {
        toast.success("An OTP has been sent to your email ");
        router.push("/auth/verify-credentials?q=reset");
      }
    } catch (error: any) {
      setError(error);
    }
  };

  // checking validation to activate button;
  const isModified = formState.isDirty;
  const allFields = watch();
  const isFormComplete =
    !isModified ||
    Object.keys(allFields).length !== 1 ||
    Object.keys(formState.errors).length !== 0;

  return (
    <div className={styles.forgotPassword}>
      <div className={styles.designContainer}>
        <AuthDesign />
      </div>

      <div className={styles.formContainer}>
        <form
          action=""
          onSubmit={handleSubmit(forgotPasswordHandler)}
          className={styles.form}
        >
          <div className={styles.title}>
            <h2>Forgot Password</h2>
            <Link href={"/"} className={styles.backToHome}>
              back to home
            </Link>
          </div>
          <div className={styles.formItems}>
            <div className={styles.item}>
              <label htmlFor="email">
                Enter Email
                <span className={styles.shortPassword}>
                  will send a 6-digit code that will allow you reset your
                  password.
                </span>
              </label>
            </div>

            <TextInput
              label={"Email"}
              placeholder="Enter your email"
              isError={!!errors?.email}
              errorMessage={errors?.email?.message || ""}
              type=""
              register={register("email")}
            />

            <Button label={" Send OTP"} disabled={isFormComplete} />
            <div className={styles.login}>
              <Link href={"/login"}>Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
