import style from "@/components/atoms/title/Title.module.scss";

import Image from "next/image";
import { useGlobalContext } from "../../../../context/AppContext";

const MobileTitle = ({ text, src }: any) => {
  const { theme } = useGlobalContext();
  return (
    <h2
      className={
        theme === "light"
          ? style.mobile_title
          : `${style.mobile_title} ${style.dark}`
      }
    >
      <Image className={style.icon} src={src} alt="" width={25} height={25} />
      {text}
    </h2>
  );
};

export default MobileTitle;
