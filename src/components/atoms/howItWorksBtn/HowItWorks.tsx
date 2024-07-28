import style from "@/components/atoms/howItWorksBtn/HowItworks.module.scss";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { useGlobalContext } from "../../../../context/AppContext";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HowItWorks = ({ url }: any) => {
  const { theme } = useGlobalContext();
  return (
    <div className={style.container}>
      <Link href={url} className={style.links}>
        <button
          className={
            theme === "light"
              ? style.play_button1
              : `${style.play_button1} ${style.dark}`
          }
        >
          View more
          <ArrowRightIcon className={style.play_icon} />
        </button>
      </Link>
    </div>
  );
};

export default HowItWorks;
