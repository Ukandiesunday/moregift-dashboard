import React from "react";
import style from "@/components/atoms/herotext/HeroText.module.scss";
import Image from "next/image";

import { useGlobalContext } from "../../../../context/AppContext";

const HeroText = ({ text1, text2, text3, text4, text02, icon, url }: any) => {
  const { theme } = useGlobalContext();
  return (
    <div className={style.container}>
      <h2
        className={theme === "light" ? style.h2 : `${style.h2} ${style.dark}`}
      >
        {text1}
      </h2>

      <div className={style.wrapper}>
        <p
          className={theme === "light" ? style.p1 : `${style.p1} ${style.dark}`}
        >
          <Image src={icon} alt="checkMark" width={20} height={20} /> {text2}
        </p>
        <p
          className={theme === "light" ? style.p1 : `${style.p1} ${style.dark}`}
        >
          <Image src={icon} alt="checkMark" width={20} height={20} /> {text3}
        </p>
        <p
          className={theme === "light" ? style.p1 : `${style.p1} ${style.dark}`}
        >
          <Image src={icon} alt="checkMark" width={20} height={20} /> {text4}
        </p>
        <p
          className={theme === "light" ? style.p1 : `${style.p1} ${style.dark}`}
        >
          {text02}
        </p>
      </div>
    </div>
  );
};

export default HeroText;
