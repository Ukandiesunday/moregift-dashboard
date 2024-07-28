import style from "@/components/organisms/themetoggle/ThemeStyles.module.scss";

import Image from "next/image";

import { useGlobalContext } from "../../../../context/AppContext";

const ThemeToggle = () => {
  const { theme, themeToggle } = useGlobalContext();
  return (
    <button type="button" onClick={themeToggle} className={style.toggle_btn}>
      {theme === "light" ? (
        <Image src="/icons/night-mode.png" alt="" width={24} height={24} />
      ) : (
        <Image src="/icons/toggle.png" alt="" width={24} height={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
