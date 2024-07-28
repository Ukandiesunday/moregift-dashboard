"use client";
import Image from "next/image";
import styles from "./verifications.module.scss";
import Button from "../../../components/button/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

import Preloader from "../../../components/preloader/Preloader";
import { postData } from "@/api/request";
import { removeItem, retrieveItem } from "@/utility/storage";
import { GENERATE_OTP_URL, VERIFY_EMAIL_URL, VERIFY_OTP_URL } from "@/env";
import AuthDesign from "@/components/authDesign/AuthDesign";

const Verifications = () => {
  const searchParams = useSearchParams();
  const [endpoint, setEndpoint] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const verifiedRouteParam = searchParams.get("q");

  // Checking the right endpoint to use  for verification
  // because otp and email verifications is redirected to this page

  useEffect(() => {
    if (verifiedRouteParam === "register") {
      setEndpoint(VERIFY_EMAIL_URL);
    } else if (verifiedRouteParam === "resend") {
      setEndpoint(VERIFY_OTP_URL);
    }
  }, [verifiedRouteParam]);

  const [otpValues, setOtpValues] = useState<any>({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  const handleOtpChange = (e: any) => {
    const { value, name } = e.target;
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      setOtpValues({
        ...otpValues,
        [name]: value,
      });
    }

    // Moves focus to the next input field
    if (value && name !== "otp6") {
      const nextInput = document.querySelector(
        `input[name=otp${parseInt(name[name.length - 1]) + 1}]`
      );
      if (nextInput) {
        (nextInput as HTMLElement).focus();
      }
    }
  };

  // Focuses the input in the previous field when deleted

  const handleKeyDown = (e: any) => {
    const { value, name } = e.target;
    if (e.key === "Backspace" && value === "" && name !== "otp1") {
      const prevInput = document.querySelector(
        `input[name=otp${parseInt(name[name.length - 1]) - 1}]`
      );

      if (prevInput) {
        (prevInput as HTMLElement).focus();
      }
    }
  };

  // handles retrieval of email
  const email: any = retrieveItem("email");

  // handles form submission
  const verificationHandler = async (e: any) => {
    setLoading(true);

    e.preventDefault();
    const token = parseInt(Object.values(otpValues).join(""));

    const data = {
      token,
      email,
    };

    try {
      const response: any | undefined = await postData(endpoint, data);

      if (response.status === 201) {
        //checking previously verified route with the 'q = reset' router parameter and redirect accordingly;

        if (verifiedRouteParam === "reset") {
          toast.success("Success");
          removeItem("email");
          router.push("/auth/resetpassword");
        } else {
          toast.success("Success");
          removeItem("email");
          router.push("/auth/login");
        }
      }
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  // resending otp
  const resendOtp = async () => {
    const endpoint = GENERATE_OTP_URL;
    try {
      const response: any | undefined = await postData(endpoint, { email });

      if (response.status === 201) {
        toast.success("OTP is sent to your email");
        router.push("/auth/verify-credentials?q=resend");
      }
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div className={styles.verifyEmail}>
      <div className={styles.designContainer}>
        <AuthDesign />
      </div>
      <div className={styles.formRight}>
        <form action="" className={styles.form} onSubmit={verificationHandler}>
          <div className={styles.title}>
            <h2>Verify email</h2>
            <Link href={"/"} className={styles.backToHome}>
              back to home
            </Link>
          </div>
          <div className={styles.formItem}>
            <div className={styles.mailHead}>
              <p>Enter the 6-digit code sent to </p>
              <p>{email} to verify email</p>
            </div>
            <p className={styles.expiresCode}>
              Code expires in <span>4:46</span>
            </p>
            <div className={styles.otpWrapper}>
              {Object.keys(otpValues).map((key, i) => (
                <input
                  key={i}
                  value={otpValues[key]}
                  name={key}
                  type="text"
                  placeholder="-"
                  className={styles.otp}
                  onChange={handleOtpChange}
                  onKeyDown={handleKeyDown}
                  maxLength={1}
                />
              ))}
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <Button
              label={"Verify"}
              spinner={loading && <Preloader />}
              type={"submit"}
            />
            <button type="button" onClick={resendOtp} className={styles.resend}>
              resend code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verifications;
