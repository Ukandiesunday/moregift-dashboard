"use client";

import Image from "next/image";
import styles from "./signup.module.scss";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../../../components/button/Button";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../../schema/formschema/formSchema";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import Preloader from "../../../components/preloader/Preloader";
import { postData } from "@/api/request";
import { storeItem } from "@/utility/storage";
import { TextInput } from "@/components";
import { REGISTER_URL } from "@/env";

import AuthDesign from "@/components/authDesign/AuthDesign";

interface SignUpDTO {
  organisationName: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}
const SignUp = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  // toggling eye icon
  const togglePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const toggleConfirmPassword = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
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
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      organisationName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  // handle data fetching
  const signupHandler = async (values: SignUpDTO) => {
    console.log(values);
    setLoading(true);
    const data = {
      organisationName: values?.organisationName ?? "",
      username: values?.username ?? "",
      password: values?.password ?? "",
      confirmPassword: values?.confirmPassword ?? "",
      email: values?.email ?? "",
    };

    const endpoint = REGISTER_URL;
    const email = values?.email;

    try {
      const response: any | undefined = await postData(endpoint, data);

      console.log("Response:", response.data);

      if (response.status === 201) {
        storeItem("email", email);

        toast.success("Success,one more step");

        router.push("/auth/verify-credentials?q=register");
      }
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  //checking validations to activate button
  const isModified = formState.isDirty;
  const allFields = watch();
  const isFormComplete = Object.keys(allFields).length !== 5 || !isModified;

  return (
    <div className={styles.signUp}>
      <div className={styles.designContainer}>
        <AuthDesign />
      </div>
      <div className={styles.formRight}>
        <form
          action=""
          onSubmit={handleSubmit(signupHandler)}
          className={styles.form}
        >
          <div className={styles.formHeader}>
            <h2>Signup</h2>
            <p className={styles.account}>
              Already have account?
              <Link className={styles.login} href="/login">
                Login
              </Link>
            </p>
          </div>

          <div className={styles.formItems}>
            <TextInput
              label="organization"
              placeholder="Enter organization name"
              isError={!!errors?.organisationName}
              errorMessage={errors?.organisationName?.message || ""}
              type="text"
              register={register("organisationName")}
            />

            <TextInput
              label="email"
              placeholder="Enter email "
              isError={!!errors?.email}
              errorMessage={errors?.email?.message || ""}
              type="email"
              register={register("email")}
            />

            <TextInput
              label="user name"
              placeholder="Enter username "
              isError={!!errors?.username}
              errorMessage={errors?.username?.message || ""}
              type="text"
              register={register("username")}
            />

            <div className={styles.item}>
              <label htmlFor="password">
                Create Password
                <span className={styles.shortPassword}>
                  Not less than 8 characters
                </span>
              </label>

              <TextInput
                label=""
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
            </div>

            <TextInput
              label="confirm password"
              isError={!!errors?.confirmPassword}
              errorMessage={errors?.confirmPassword?.message || ""}
              type={visibleConfirmPassword ? "text" : "password"}
              placeholder={"Confirm password"}
              register={register("confirmPassword")}
              iconButton={
                <button type="button" onClick={toggleConfirmPassword}>
                  {visibleConfirmPassword ? (
                    <FaEye className={styles.eyeIcon} />
                  ) : (
                    <FaEyeSlash className={styles.eyeIcon} />
                  )}
                </button>
              }
            />

            <Button
              label={" Sign up"}
              spinner={loading && <Preloader />}
              disabled={isFormComplete}
              chevronRight={
                <ChevronRightIcon
                  className={styles.icon}
                  width={18}
                  height={18}
                />
              }
            />

            <h3>
              By signing up, you accept our Terms of Use and Privacy Policy
            </h3>

            <Link href={"/"} className={styles.backToHome}>
              back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
