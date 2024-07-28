// import Carousel from "../../atoms/carousel/Carousel";
import style from "@/components/organisms/heros/HeroHome.module.scss";

import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
// import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
import Image from "next/image";
import { useGlobalContext } from "../../../../context/AppContext";
import React, { useEffect, useState } from "react";
const HeroHome = () => {
  const { theme } = useGlobalContext();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: [
        "Finally, the Gift Card that",
        "gives you 100% spending",

        "freedom",
      ],
      // image: "/images/blackcard.png",
      image: "/images/newcard.svg",
    },
    {
      text: [
        "Finally, the Gift Card that",
        "connects you to any",
        "stores or merchant.",
      ],
      image: "/images/newcard.svg",
      // image: "/images/car04.svg"
    },

    {
      text: [
        "Finally, the Gift Card that",

        " deposits your Gift Cash",
        "into your bank account.",
      ],

      image: "/images/newcard.svg",
      // image: "/images/car04.svg",
    },
    {
      text: [
        "Finally, the Gift Card that",
        "deposits your Gift Cash",
        "into your bank account",
      ],

      image: "/images/newcard.svg",
      // image: "/images/car02.svg",
    },
    // {
    //   text: [
    //     "Crowd gifting in multiple",
    //     "currencies from anywhere",
    //     "in the world.",
    //   ],
    //   image: "/images/newcard.svg",
    //   // image: "/images/car03.svg",
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.desc}>
          {/* <div className={style.powered_by_digit}>
            Powered by
            {theme === "light" ? (
              <Image
                src="/icons/Digitlogo.svg"
                width={78.9}
                height={18}
                alt="digito logo"
              />
            ) : (
              <Image
                src="/icons/Digitlogow.svg"
                width={78.9}
                height={18}
                alt="digito logob"
              />
            )}
          </div> */}
          <div className={style.hero_text}>
            {/* <div className={style.circle_vector}>
              <Image
                src="/images/circlehero.png"
                width={370}
                height={350}
                alt="vector circle"
              />
            </div> */}
            <p
              className={
                theme === "light"
                  ? style.hero_p1
                  : `${style.dark}  ${style.hero_p1}`
              }
            >
              {slides[currentSlide].text[0]}
            </p>
            <p
              className={
                theme === "light"
                  ? style.hero_p1
                  : `${style.dark}  ${style.hero_p1}`
              }
            >
              {slides[currentSlide].text[1]}
            </p>
            <p
              className={
                theme === "light"
                  ? style.hero_p1
                  : `${style.dark}  ${style.hero_p1}`
              }
            >
              {slides[currentSlide].text[2]}
            </p>

            <div className={style.btn_container}>
              {/* <div className={style.icons}>
                Available on
                {theme === "light" ? (
                  <Image src="/icons/ios.svg" alt="" height={19} width={19} />
                ) : (
                  <Image
                    src="/icons/applew.svg"
                    alt=""
                    height={19}
                    width={19}
                  />
                )}
                and
                <Image
                  src="/icons/playstore.svg"
                  alt=""
                  height={19}
                  width={19}
                />
              </div> */}
              <GetFreeButton />
              {/* <HowItWorks /> */}
            </div>
          </div>
        </div>

        <div className={style.hero_img}>
          <Image
            alt="hero image"
            priority
            src={slides[currentSlide].image}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
