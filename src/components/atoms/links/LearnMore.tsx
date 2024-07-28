import React from "react";
import style from "@/components/atoms/links/Links.module.scss";
import { FaPlay } from "react-icons/fa";
import { useGlobalContext } from "../../../../context/AppContext";

const LearnMore = () => {
  const { theme } = useGlobalContext();
  return (
    <div className={style.link_container}>
      <a
        href=""
        className={
          theme === "light" ? style.link : `${style.link} ${style.dark}`
        }
      >
        See video
        <span>
          <FaPlay className={style.icon} />
        </span>
      </a>
    </div>
  );
};

export default LearnMore;
