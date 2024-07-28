import style from "../banner/Banner.module.scss";

import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";

import CardImage from "@/components/atoms/cardimage/CardImage";

import HeroText from "@/components/atoms/herotext/HeroText";
import Image from "next/image";
import { useGlobalContext } from "../../../../../context/AppContext";

const Banner = ({
  text1,
  text2,
  text3,
  text4,
  src,
  alt,
  checkmark,
  title,
  icon,
}: any) => {
  const { theme } = useGlobalContext();
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.center}>
          <h2
            className={
              theme === "light" ? style.title : `${style.title} ${style.dark}`
            }
          >
            <Image src={icon} height={30} width={30} alt="" />
            {title}
          </h2>
          <div className={style.desc}>
            <h2
              className={
                theme === "light" ? style.h2 : `${style.h2} ${style.dark}`
              }
            >
              {text1}
            </h2>
            <div className={style.hero_img2}>
              <CardImage url={src} alt={alt} />
            </div>

            <div className={style.hero_text}>
              <HeroText
                text2={text2}
                text3={text3}
                text4={text4}
                icon={checkmark}
              />
            </div>
          </div>

          <div className={style.btn_container}>
            <GetFreeButton />
            {/* <HowItWorks /> */}
          </div>
        </div>

        <div className={style.hero_img}>
          <CardImage url={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
