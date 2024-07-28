import MenuItem from "@/components/molecules/modalItem/ModalItem";
import style from "@/components/organisms/productsmenu/ProductMenu.module.scss";

import React from "react";
import { useGlobalContext } from "../../../../context/AppContext";

const ProductsMenu = ({ setProductMenu }: any) => {
  const { theme } = useGlobalContext();
  return (
    <div
      onMouseEnter={() => setProductMenu(true)}
      className={
        theme === "light" ? style.modal : `${style.modal} ${style.dark}`
      }
    >
      <div
        onMouseLeave={() => setProductMenu(false)}
        className={style.features_modal}
      >
        <div className={style.col}>
          {/* <MenuItem
            head="Send and receive Gift Cash"
            text="Request, send, and receive instant Cash Gifts from anyone, anywhere, instantly, and tax-free "
            src="/icons/gift-card1.svg"
            path="/send-receive-gift"
          /> */}
          <MenuItem
            head="Open Gift Card"
            text="Request, send, and receive instant Cash Gifts from anyone, anywhere, instantly, and tax-free "
            src="/icons/gift-card1.svg"
            path="/home"
          />

          {/* <MenuItem
            head="Crowd Gifting"
            text="Receive donations globally in any currency. Auto-deposit to your bank in real time"
            src="/icons/dollarround.svg"
            path="/crowd-gifting"
          />
          <MenuItem
            head="Multiple currency account"
            text="Receive and hold 150+ currencies in one account"
            src="/icons/wallet.svg"
            path="/multiple-currency"
          /> */}
        </div>
        <div className={style.col}>
          {/* <MenuItem
            head="Currency conversion"
            text="Easily convert from one currency to another at zero fees and best rates"
            src="/icons/convert.svg"
            path="/currency-conversion"
          /> */}
          <MenuItem
            head="Corporate gifting"
            text="Give employees a gift card that gives them freedom to spend or deposit gift cash into their bank"
            src="/icons/payout.svg"
            path="/corporate-gifting"
          />
          <MenuItem
            head="Greeting Cards"
            text="Add customized greeting cards along with your gift cash for a memorable experience"
            src="/icons/picture1.png"
            path="/greeting-card"
          />
          {/* <MenuItem
            head="Coming soon"
            text="Send gift cash in any currency using crypto. Get debit cards in multiple currencies to spend globally"
            src="/icons/more.svg"
            path="/coming-soon"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;
