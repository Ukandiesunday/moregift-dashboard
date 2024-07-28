import LearnMore from "@/components/atoms/links/LearnMore";
import style from "@/components/organisms/ChooseUs/ChooseUs.module.scss";

import Image from "next/image";
import { useGlobalContext } from "../../../../context/AppContext";

const ChooseUs = () => {
  const { theme } = useGlobalContext();
  return (
    <div className={style.container}>
      <h1 className={style.title}>Why people trust MoreGift</h1>
      <div className={style.wrapper}>
        <div className={style.row}>
          <span
            className={
              theme === "light" ? style.icon : `${style.icon} ${style.dark}`
            }
          >
            {theme === "light" ? (
              <Image src="/icons/deadline.svg" alt="" width={45} height={45} />
            ) : (
              <Image src="/icons/wdeadline.svg" alt="" width={45} height={45} />
            )}
          </span>
          <h3
            className={
              theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
            }
          >
            15 seconds transactions
          </h3>
          <p
            className={theme === "light" ? style.p : `${style.p} ${style.dark}`}
          >
            Enjoy lightening speed transactions. Whether locally or over the
            Atlantic your gift will arrive in 15 seconds.
          </p>
          <div className={style.button}>
            <LearnMore />
          </div>
        </div>
        <div className={style.row}>
          <span
            className={
              theme === "light" ? style.icon : `${style.icon} ${style.dark}`
            }
          >
            {theme === "light" ? (
              <Image src="/icons/tax.svg" alt="" width={45} height={45} />
            ) : (
              <Image src="/icons/wTax.svg" alt="" width={45} height={45} />
            )}
          </span>
          <h3
            className={
              theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
            }
          >
            Tax-free transactions
          </h3>
          <p
            className={theme === "light" ? style.p : `${style.p} ${style.dark}`}
          >
            Yes. Any Gift cash you send or receive, regardless of amount, is
            non-taxable across the world.
          </p>
          <div className={style.button}>
            <LearnMore />
          </div>
        </div>
        <div className={style.row}>
          <span
            className={
              theme === "light" ? style.icon : `${style.icon} ${style.dark}`
            }
          >
            {theme === "light" ? (
              <Image
                src="/icons/life-insurance.svg"
                alt=""
                width={45}
                height={45}
              />
            ) : (
              <Image
                src="/icons/wlife-insuranc.svg"
                alt=""
                width={45}
                height={45}
              />
            )}
          </span>
          <h3
            className={
              theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
            }
          >
            Insurance cover
          </h3>
          <p
            className={theme === "light" ? style.p : `${style.p} ${style.dark}`}
          >
            Sleep tight, your moregift Card bundles are secured by the Nigerian
            Deposit Insurance Commission.
          </p>
          <div className={style.button}>
            <LearnMore />
          </div>
        </div>
        <div className={style.row}>
          <span
            className={
              theme === "light" ? style.icon : `${style.icon} ${style.dark}`
            }
          >
            {theme === "light" ? (
              <Image src="/icons/security.svg" alt="" width={45} height={45} />
            ) : (
              <Image src="/icons/wsecurity.svg" alt="" width={45} height={45} />
            )}
          </span>
          <h3
            className={
              theme === "light" ? style.h3 : `${style.h3} ${style.dark}`
            }
          >
            State of the Art Security
          </h3>
          <p
            className={theme === "light" ? style.p : `${style.p} ${style.dark}`}
          >
            MoreGift uses a [enter security protocol] to secure your accounts.
          </p>
          <div className={style.button}>
            <LearnMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
