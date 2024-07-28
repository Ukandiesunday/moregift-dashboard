import VerifyEmail from "@/pages/auth/verify-credentials";

const verifyEmailUrl = process.env.VERIFY_EMAIL_URL;

const VerifyEmailPage = () => {
  const endpoint = "/api/v1/auth/corporate/verify-email";
  return (
    <div>
      <VerifyEmail endpoint={endpoint} />
    </div>
  );
};

export default VerifyEmailPage;
