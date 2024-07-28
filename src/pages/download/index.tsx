import React from "react";
import style from "./style.module.scss";
import { Header } from "@/components/organisms";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <div>
      <Header
        title={``}
        description={`Learn about our currency conversion page`}
      />
      <div className={style.apk_container}>
        <div className={style.apk_wrapper}>
          <a
            href="https://expo.dev/artifacts/eas/53z3EGyCvfB4q5qTxhxmLK.apk"
            download
            className={style.content}
          >
            Download moregift app APK
          </a>
        </div>
        <Link href="/home" className={style.logo}>
          <Image src="/icons/apklogo.png" alt="" width="100" height="36" />
        </Link>
      </div>
    </div>
  );
};

export default Index;
