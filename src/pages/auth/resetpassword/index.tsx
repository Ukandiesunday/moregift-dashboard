"use client";

import Button from "../../../components/button/Button";
import styles from "./resetpassword.module.scss";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "@/schema/formschema/formSchema";
import { TextInput } from "@/components";
import AuthDesign from "@/components/authDesign/AuthDesign";

const ResetPassword = () => {
  const [isNewPassword, setNewPassword] = useState(false);
  const [isConfirmPassword, setConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const toggleNewPassword = () => {
    setNewPassword(!isNewPassword);
  };
  const toggleConfirmPassword = () => {
    setConfirmPassword(!isConfirmPassword);
  };

  const {
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    formState,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });
  // handling form submission
  const resetPasswordHandler = async (values: any) => {
    console.log(values);
    const endpoint = "";
    const data = {};
    // const result = await postData(endpoint, )
  };
  // const isModified = formState.isDirty;
  // const allFields = watch();
  // const isFormComplete =
  //   !isModified ||
  //   Object.keys(allFields).length !== 5 ||
  //   Object.keys(formState.errors).length !== 0;

  return (
    <div className={styles.resetPassword}>
      <div className={styles.designContainer}>
        <AuthDesign />
      </div>
      <div className={styles.formContainer}>
        <form
          action=""
          onSubmit={handleSubmit(resetPasswordHandler)}
          className={styles.form}
        >
          <div className={styles.title}>
            <h2>Reset password</h2>
          </div>
          <div className={styles.formItems}>
            <div className={styles.item}>
              <label htmlFor="new password">
                Enter New Password
                <span className={styles.shortPassword}>
                  Not less than 8 characters
                </span>
              </label>

              <TextInput
                label=""
                placeholder="Enter new password"
                isError={!!errors?.newPassword}
                errorMessage={errors?.newPassword?.message || ""}
                type={isNewPassword ? "text" : "password"}
                register={register("newPassword")}
                iconButton={
                  <button type="button" onClick={toggleNewPassword}>
                    {isNewPassword ? (
                      <FaEye className={styles.eyeIcon} />
                    ) : (
                      <FaEyeSlash className={styles.eyeIcon} />
                    )}
                  </button>
                }
              />
            </div>

            <TextInput
              label="Confirm password"
              placeholder="Confirm password"
              isError={!!errors?.confirmPassword}
              errorMessage={errors?.confirmPassword?.message || ""}
              type={isConfirmPassword ? "text" : "password"}
              register={register("confirmPassword")}
              iconButton={
                <button type="button" onClick={toggleConfirmPassword}>
                  {isConfirmPassword ? (
                    <FaEye className={styles.eyeIcon} />
                  ) : (
                    <FaEyeSlash className={styles.eyeIcon} />
                  )}
                </button>
              }
            />

            <Button
              type={"submit"}
              label={" Continue"}
              chevronRight={
                <ChevronRightIcon
                  className={styles.icon}
                  width={18}
                  height={18}
                />
              }
            />
          </div>
          <Link href={"/"} className={styles.backToHome}>
            back to home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
