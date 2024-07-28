import Image from "next/image";
import style from "../cardimage/cardimage.module.scss";
const CardImage = ({ url, alt }: any) => {
  return (
    <div className={style.container}>
      <div className={style.img_con}>
        <div className={style.img_wrapper}>
          <Image
            src={url}
            alt={alt}
            width={50}
            height={50}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default CardImage;
