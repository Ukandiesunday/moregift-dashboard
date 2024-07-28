import style from "@/components/atoms/QrModal/QrModal.module.scss";

import Image from "next/image";

import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../../../../context/AppContext";

const QrModal = () => {
  const { setQrCode, qrCode }: any = useGlobalContext();
  if (!qrCode) {
    return null;
  }
  return (
    <div
      className={
        qrCode
          ? style.qr_modal_overlay
          : `${style.qr_modal_overlay} ${style.overlay}`
      }
    >
      <div className={style.Qr_content}>
        <Image
          priority
          src="/images/qrCode.png"
          alt="qrCode"
          width={800}
          height={580}
          className={style.qr_img}
        />
        <IoClose onClick={() => setQrCode(false)} className={style.icon} />
      </div>
      {/* <div className={style.Qr_mobile}>
        <Image
          priority
          src="/images/qrCode.png"
          alt="qrCode"
          width={450}
          height={400}
        />
        <IoClose
          onClick={() => setQrCode(false)}
          className={style.mobile_icon}
        />
      </div> */}
    </div>
  );
};

export default QrModal;
