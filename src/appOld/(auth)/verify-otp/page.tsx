import VerifyOtp from "@/pages/auth/verify-credentials";

import React from "react";

const VerifyOtpPage = () => {
  const endpoint: string = "/api/v1/auth/corporate/verify-otp";
  return (
    <div>
      <VerifyOtp endpoint={endpoint} />
    </div>
  );
};

export default VerifyOtpPage;
