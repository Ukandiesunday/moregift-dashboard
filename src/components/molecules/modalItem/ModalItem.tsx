import style from "@/components/molecules/modalItem/ModalItem.module.scss";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGlobalContext } from "../../../../context/AppContext";

const ModalItem = ({ text, head, src, path }: any) => {
  const { theme } = useGlobalContext();
  return (
    <Link href={path} className={style.modal_item}>
      <div className={style.row}>
        <span className={style.icon}>
          <Image src={src} width={24} height={24} alt="" />
        </span>
        <div className={style.items}>
          <h5
            className={
              theme === "light" ? style.h5 : `${style.h5} ${style.dark}`
            }
          >
            {head}
            <FaArrowRightLong
              className={
                theme === "light" ? style.arrow : `${style.arrow} ${style.dark}`
              }
            />
          </h5>
          <p
            className={theme === "light" ? style.p : `${style.p} ${style.dark}`}
          >
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ModalItem;
