import Image from "next/image";
import style from "@/components/atoms/title/Title.module.scss";
import { useGlobalContext } from "../../../../context/AppContext";

const Title = ({ icon, title, headcrypto, className }: any) => {
  const { theme } = useGlobalContext();
  return (
    <div>
      <h2
        className={
          theme === "light" ? style.title : `${style.title} ${style.dark}`
        }
      >
        <Image
          className={style.icon}
          src={icon}
          alt=""
          width={25}
          height={25}
        />

        {title}
        <span className={className}>{headcrypto}</span>
      </h2>
    </div>
  );
};

export default Title;
