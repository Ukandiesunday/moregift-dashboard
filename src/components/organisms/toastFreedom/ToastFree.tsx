import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

import style from "@/components/organisms/toastFreedom/newToast.module.scss";

import Image from "next/image";
import { useGlobalContext } from "../../../../context/AppContext";
const ToastFree = () => {
  const { theme } = useGlobalContext();
  return (
    <div className={style.toast_container}>
      <div className={style.top}>
        <h1 className={style.h1}>Toast to freedom!🥂</h1>
        <h2
          className={theme === "light" ? style.h2 : `${style.h2} ${style.dark}`}
        >
          The world’s first one-stop shop for <br />
          global Gift Cash sharing
        </h2>
        <p
          className={theme === "light" ? style.p1 : `${style.dark} ${style.p1}`}
        >
          Now, you can enjoy that 100% Gift Cash transfer freedom you couldn’t
          get from any Gift Cash <br />
          transfer or gift platform on the planet.
        </p>
      </div>

      <div className={style.bottom}>
        <div className={style.row}>
          <div
            className={
              theme === "light" ? `${style.col}` : `${style.col} ${style.dark}`
            }
          >
            <button
              className={
                theme === "light" ? style.icon : `${style.dark} ${style.icon}`
              }
            >
              {theme === "light" ? (
                <Image
                  src="/icons/deposit2.svg"
                  height={45}
                  width={26}
                  alt=""
                />
              ) : (
                <Image
                  src="/icons/depositb.svg"
                  height={45}
                  width={20}
                  alt=""
                />
              )}
            </button>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3}  ${style.dark}`
              }
            >
              Deposit to your bank
            </h3>

            <p
              className={
                theme === "light"
                  ? style.p1_right
                  : `${style.dark} ${style.p1_right} `
              }
            >
              Why choose between buying what you don’t want and ignoring your
              Gift cash when there’s a third option?
            </p>
            <p
              className={
                theme === "light"
                  ? style.p2_right
                  : `${style.p2_right} ${style.dark}`
              }
            >
              Spend your gift cash anywhere you like or send it to your bank in
              15 seconds. After all, it’s your money, right?
            </p>
          </div>

          <div
            className={
              theme === "light"
                ? `${style.col} ${style.light}`
                : `${style.col} ${style.dark}`
            }
          >
            <button
              className={
                theme === "light" ? style.icon : `${style.dark} ${style.icon}`
              }
            >
              {theme === "light" ? (
                <Image src="/icons/refund1.svg" height={26} width={26} alt="" />
              ) : (
                <Image src="/icons/refundb.svg" height={26} width={26} alt="" />
              )}
            </button>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3}  ${style.dark}`
              }
            >
              No loss of unredeemed Cards
            </h3>

            <p
              className={
                theme === "light"
                  ? style.p1_right
                  : `${style.dark} ${style.p1_right} `
              }
            >
              Your money should be with you or your beneficiary. Why should both
              of you lose it because it was not redeemed?
            </p>
            <p
              className={
                theme === "light"
                  ? style.p2_right
                  : `${style.p2_right} ${style.dark}`
              }
            >
              Unredeemed Gift Cash will be returned to your Gift Bundle if the
              recipient rejects it or fails to redeem after 30days.
            </p>
          </div>

          <div
            className={
              theme === "light"
                ? `${style.col} ${style.light}`
                : `${style.col} ${style.dark}`
            }
          >
            <button
              className={
                theme === "light" ? style.icon : `${style.dark} ${style.icon}`
              }
            >
              {theme === "light" ? (
                <Image
                  src="/icons/Calendar1.svg"
                  height={45}
                  width={26}
                  alt=""
                />
              ) : (
                <Image
                  src="/icons/calendarb.svg"
                  height={45}
                  width={26}
                  alt=""
                />
              )}
            </button>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3}  ${style.dark}`
              }
            >
              No Expiry dates
            </h3>

            <p
              className={
                theme === "light"
                  ? style.p1_right
                  : `${style.dark} ${style.p1_right} `
              }
            >
              Your cash in your pocket or bank does not expire, why should Cash
              on your Gift Card be any different?
            </p>
            <p
              className={
                theme === "light"
                  ? style.p2_right
                  : `${style.p2_right} ${style.dark}`
              }
            >
              Your MoreGift Cash is available for you to spend anytime you like.
            </p>
          </div>

          <div
            className={
              theme === "light"
                ? `${style.col}  `
                : `${style.dark} ${style.col}  ${style.col4}`
            }
          >
            <button
              className={
                theme === "light" ? style.icon : `${style.dark} ${style.icon}`
              }
            >
              {theme === "light" ? (
                <Image
                  src="/icons/cash-on-delivery1.svg"
                  height={45}
                  width={26}
                  alt=""
                />
              ) : (
                <Image
                  src="/icons/cash-on-deliveryb.svg"
                  height={45}
                  width={26}
                  alt=""
                />
              )}
            </button>
            <h3
              className={
                theme === "light" ? style.h3 : `${style.h3}  ${style.dark}`
              }
            >
              No trading needed
            </h3>
            <p
              className={
                theme === "light"
                  ? style.p1_right
                  : `${style.dark} ${style.p1_right} `
              }
            >
              Save yourself the stress of trading gift cards for cash on
              third-party apps;
            </p>
            <p
              className={
                theme === "light"
                  ? style.p2_right
                  : `${style.p2_right} ${style.dark}`
              }
            >
              Choose MoreGift Card for direct access to your gift cash, allowing
              you the flexibility to use it as you wish without making a
              purchase.
            </p>
          </div>
        </div>
        {/* <div className={style.vector}>
          <Image
            src="/images/circlehero.png"
            alt="side vector"
            width={400}
            height={400}
            // layout="responsive"
          />
        </div> */}
      </div>
      {/* <GetFreeButton /> */}
    </div>
  );
};

export default ToastFree;
