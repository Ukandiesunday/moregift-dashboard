import Logo from "@/components/atoms/logo/Logo";

import style from "@/components/organisms/footer/Footer.module.scss";

import { useGlobalContext } from "../../../../context/AppContext";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const { theme } = useGlobalContext();
  return (
    <footer
      className={
        theme === "light" ? style.footer : `${style.footer} ${style.dark}`
      }
    >
      <div className={style.wrapper}>
        <ul
          className={
            theme === "light" ? style.col : `${style.col} ${style.dark}`
          }
        >
          <li className={style.head}>
            <Logo />
          </li>

          {/* <li
            className={
              theme === "light" ? style.head : `${style.head} ${style.dark}`
            }
          >
            Location
          </li>

          <li className={style.item}>UK</li>
          <li className={style.item}>United States</li>
          <li className={style.item}>Canada</li>
          <li className={style.item}>Nigeria</li> */}
        </ul>
        <div
          className={
            theme === "light" ? style.col : `${style.col} ${style.dark}`
          }
        >
          <div
            className={
              theme === "light" ? style.head : `${style.head} ${style.dark}`
            }
          >
            Product
          </div>
          <Link href="/home" className={style.item}>
            Open Gift Card
          </Link>

          {/* <Link href="/crowd-gifting" className={style.item}>
            Crowd Gifting


          </Link> *
          </Link>


          </Link> */}

          {/* <Link href="/currency-conversion" className={style.item}>
            Currency Conversion
          </Link> */}
          <Link href="/greeting-card" className={style.item}>
            Greeting Cards
          </Link>
          {/* <Link href="/multiple-currency" className={style.item}>
            Multiple Currency Account
          </Link> */}
          <Link href="/corporate-gifting" className={style.item}>
            Corporate Gifting
          </Link>

          {/* <Link href="/coming-soon" className={style.item}>
            Coming Soon

          {/* <Link href="/others" className={style.item}>
            Others

          </Link> */}
        </div>

        {/* <ul
          className={
            theme === "light" ? style.col : `${style.col} ${style.dark}`
          }
        >
          <li
            className={
              theme === "light" ? style.head : `${style.head} ${style.dark}`
            }
          >
            Company
          </li>
          <li className={style.item}> About</li>
          <li
            className={
              theme === "light"
                ? `${style.item} ${style.item2}`
                : `${style.item2} ${style.item} ${style.dark}`
            }
          >
            Support
          </li>
          <li className={style.item}>How to</li>
          <li className={style.item}>FAQs</li>
          <li className={style.item}>Customer service </li>
        </ul> */}

        <div
          className={
            theme === "light" ? style.col : `${style.col} ${style.dark}`
          }
        >
          <div
            className={
              theme === "light" ? style.head : `${style.head} ${style.dark}`
            }
          >
            Legal
          </div>
          <Link href="/privacy-policy" className={style.item}>
            Privacy policy
          </Link>
          <Link href="/terms-condition" className={style.item}>
            Terms & Conditions
          </Link>
        </div>

        <div
          className={
            theme === "light" ? style.col : `${style.col} ${style.dark}`
          }
        >
          <div
            className={
              theme === "light" ? style.head : `${style.head} ${style.dark}`
            }
          >
            Connect
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61558669732468&mibextid=ZbWKwL"
            className={style.item}
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/moregift/mycompany/"
            className={style.item}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/moregift.app?igsh=MWNibTFpdTM0andlNA=="
            className={style.item}
          >
            Instagram
          </a>
          <a href="https://twitter.com/moregiftapp" className={style.item}>
            X.com
          </a>
          {/* <a href="" className={style.item}>
            YouTube
          </a> */}
        </div>
      </div>

      {/* <div className={style.digit}>
        Powered by
        {theme === "light" ? (
          <Image
            src="/icons/Digitlogo.svg"
            width={78.9}
            height={18}
            alt="digito logo"
          />
        ) : (
          <Image
            src="/icons/Digitlogow.svg"
            width={78.9}
            height={18}
            alt="digito logob"
          />
        )}
      </div> */}
    </footer>
  );
};

export default Footer;
