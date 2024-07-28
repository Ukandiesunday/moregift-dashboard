import Slider from "react-slick";
import style from "@/components/organisms/testimonial/Test.module.scss";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
import { useGlobalContext } from "../../../../context/AppContext";

const Testimonial = () => {
  const { theme } = useGlobalContext();
  function Arrow({ className, style, onClick }: any) {
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    disableOnInteraction: true,
    pauseOnMouseHover: false,
    autoplaySpeed: 5000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={style.wrapper}>
      <h1 className={style.h1}>Don’t take our word for it</h1>
      <div>
        <Slider {...settings} className={style.slide}>
          <div
            className={
              theme === "light" ? style.item : `${style.item} ${style.dark}`
            }
          >
            <div className={style.rev_icons}>
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
            </div>
            <p
              className={
                theme === "light" ? style.p : `${style.p} ${style.dark}`
              }
            >
              I have searched for a solution like this for a long time, so glad
              MoreGift came through
            </p>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
              }
            >
              - Janet Brown
            </h3>
          </div>
          <div
            className={
              theme === "light" ? style.item : `${style.item} ${style.dark}`
            }
          >
            <div className={style.rev_icons}>
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
            </div>
            <p
              className={
                theme === "light" ? style.p : `${style.p} ${style.dark}`
              }
            >
              This is a game changer in modern gifting
            </p>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
              }
            >
              - Gloria Jackson
            </h3>
          </div>

          <div
            className={
              theme === "light" ? style.item : `${style.item} ${style.dark}`
            }
          >
            <div className={style.rev_icons}>
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
            </div>
            <p
              className={
                theme === "light" ? style.p : `${style.p} ${style.dark}`
              }
            >
              Unbelievable! I never believed I’ll see the days that our church
              funding activities will be this seamless. Great Job MoreGift!
            </p>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
              }
            >
              - Pastor Jacob
            </h3>
          </div>
          <div
            className={
              theme === "light" ? style.item : `${style.item} ${style.dark}`
            }
          >
            <div className={style.rev_icons}>
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
            </div>
            <p
              className={
                theme === "light" ? style.p : `${style.p} ${style.dark}`
              }
            >
              I have searched for a solution like this for a long time, so glad
              MoreGift came through
            </p>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
              }
            >
              - Janet Brown
            </h3>
          </div>
          <div
            className={
              theme === "light" ? style.item : `${style.item} ${style.dark}`
            }
          >
            <div className={style.rev_icons}>
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
              <FaStar className={style.icon} />
            </div>
            <p
              className={
                theme === "light" ? style.p : `${style.p} ${style.dark}`
              }
            >
              I have searched for a solution like this for a long time, so glad
              MoreGift came through
            </p>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
              }
            >
              - Janet Brown
            </h3>
          </div>
        </Slider>
      </div>
      <div className={style.slide_button}>
        <GetFreeButton />
      </div>
    </div>
  );
};

export default Testimonial;
