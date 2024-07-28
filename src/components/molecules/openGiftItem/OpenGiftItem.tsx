import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

import Title from "@/components/atoms/title/Title";
import style from "@/components/molecules/openGiftItem/OpenGiftItem.module.scss";
import { useGlobalContext } from "../../../../context/AppContext";

const OpenGiftItem = ({ description, title, heading, text, src }: any) => {
  const { theme } = useGlobalContext();
  return (
    <div className={style.container}>
      <h1
        className={theme === "light" ? style.h1 : `${style.h1} ${style.dark}`}
      >
        {title}
      </h1>
      <div className={style.wrapper}>
        <div className={style.left}>
          <Title title={heading} icon={src} />
          <p
            className={theme === "light" ? style.p : `${style.p} ${style.dark}`}
          >
            {text}
          </p>
          <p
            className={
              theme === "light" ? style.desc : `${style.desc} ${style.dark}`
            }
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenGiftItem;
