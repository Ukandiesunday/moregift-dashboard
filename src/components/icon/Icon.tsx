import Image from "next/image";
import React from "react";

const Icon = ({ alt, src }: any) => {
  return <Image width={20} height={20} alt={alt} src={src} />;
};

export default Icon;
