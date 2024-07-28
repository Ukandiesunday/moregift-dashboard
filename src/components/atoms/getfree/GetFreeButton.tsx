import Image from "next/image";

import style from "@/components/atoms/getfree/GetFreeButton.module.scss";
import { useGlobalContext } from "../../../../context/AppContext";
import Link from "next/link";

const GetFreeButton = () => {
  const { qrCode, setQrCode }: any = useGlobalContext();
  return (
    <div onClick={() => setQrCode(true)} className={style.get_free_button}>
      <Link href={`/download`} className={style.link}>
        <span className={style.link}>
          Get it for FREE
          <Image src="/icons/phone.png" alt="" width={20} height={20} />
        </span>
      </Link>
    </div>
  );
};

export default GetFreeButton;
