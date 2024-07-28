import style from "@/components/atoms/questionItem/QuestionItem.module.scss";

import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { useGlobalContext } from "../../../../context/AppContext";

const QuestionItem = ({ text, link }: any) => {
  const { theme } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
      className={
        theme === "light" ? style.wrapper : `${style.wrapper} ${style.dark}`
      }
    >
      <div
        className={
          theme === "light" ? style.items : `${style.items} ${style.dark}`
        }
      >
        <p className={style.p}>{text}</p>
        <span
          className={
            theme === "light" ? style.icon : `${style.icon} ${style.dark}`
          }
        >
          <IoChevronDownOutline className={style.icon2} />
        </span>
      </div>
      {isOpen && (
        <div
          className={
            theme === "light" ? style.link : `${style.link} ${style.dark}`
          }
        >
          <br />
          {link}
        </div>
      )}
    </div>
  );
};

export default QuestionItem;
