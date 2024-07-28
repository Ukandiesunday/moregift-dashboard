"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./login.module.scss";
import { Button, TextInput } from "../../../components";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../../schema/formschema/formSchema";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { storeItem } from "../../../utility/storage";

import { postData } from "../../../api/request";
import Preloader from "../../../components/preloader/Preloader";
import { LOGIN_URL } from "../../../env";

import AuthDesign from "@/components/authDesign/AuthDesign";

const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const togglePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  // form validation

  const {
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    formState,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginHandler = async (values: any) => {
    setLoading(true);
    const endpoint = LOGIN_URL;
    // const endpoint:any = process.env.LOGIN_URL;

    const data = {
      password: values?.password ?? "",
      email: values?.email ?? "",
    };
    try {
      const result: any | undefined = await postData(endpoint, data);
      const { token } = result?.data?.data;
      if (token) {
        storeItem("userToken", token);
        toast.success("login successfully");
        // router.push("/dashboard");
      }
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  // WATCHING ALL FIELDS
  const isModified = formState.isDirty;
  const allFields = watch();
  const isFormComplete =
    !isModified ||
    Object.keys(allFields).length !== 2 ||
    Object.keys(formState.errors).length !== 0;

  return (
    <div className={styles.login}>
      <div className={styles.loginLeft}>
        <AuthDesign />
      </div>

      <div className={styles.loginRight}>
        <form
          action=""
          onSubmit={handleSubmit(loginHandler)}
          className={styles.form}
        >
          <div className={styles.formHeader}>
            <h2>Login</h2>

            <p className={styles.account}>
              Don't have account?
              <Link className={styles.signupLink} href="/auth/register">
                Sign Up
              </Link>
            </p>
          </div>

          <div className={styles.formItems}>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              isError={!!errors?.email}
              errorMessage={errors?.email?.message || ""}
              type="email"
              register={register("email")}
            />
            <TextInput
              label="Password"
              placeholder="Enter password"
              isError={!!errors?.password}
              errorMessage={errors?.password?.message || ""}
              type={visiblePassword ? "text" : "password"}
              register={register("password")}
              iconButton={
                <button type="button" onClick={togglePassword}>
                  {visiblePassword ? (
                    <FaEye className={styles.eyeIcon} />
                  ) : (
                    <FaEyeSlash className={styles.eyeIcon} />
                  )}
                </button>
              }
            />

            {error && <p className={styles.serverError}>{`${error}`}</p>}
            <h3>
              <Link
                className={styles.forgotPassword}
                href={"/auth/forgotpassword"}
              >
                Forgot password
              </Link>
            </h3>
            <Button
              spinner={loading && <Preloader />}
              label={"Login"}
              // disabled={isFormComplete}
              chevronRight={
                <ChevronRightIcon
                  className={styles.icon}
                  width={18}
                  height={18}
                />
              }
            />
            <Link href={"/"} className={styles.backToHome}>
              back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
