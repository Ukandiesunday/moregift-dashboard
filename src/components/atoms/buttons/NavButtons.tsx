import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useGlobalContext } from "../../../../context/AppContext";

// see styles in Button.scss

const NavButtons = ({ setProductMenu, isProductMenu }: any) => {
  const { theme } = useGlobalContext();
  return (
    <div className="nav-btns-container">
      <div onMouseLeave={() => setProductMenu(false)} className="nav-items">
        <button
          onMouseEnter={() => setProductMenu(true)}
          className={
            theme === "light" ? "nav-button nav-button2" : "dark nav-button"
          }
        >
          <span>Products</span>
          {isProductMenu ? (
            <ChevronUpIcon
              width={20}
              height={20}
              className={theme === "light" ? "icon" : "icon dark"}
            />
          ) : (
            <ChevronDownIcon
              width={20}
              height={20}
              className={theme === "light" ? "icon" : "icon dark"}
            />
          )}
        </button>
      </div>
      {/* <button
        className={theme === "light" ? "nav-button grey" : "dark nav-button"}
      >
        Support
      </button> */}

      {/* <button
        className={theme === "light" ? "nav-button grey" : "dark nav-button"}
      >
        Blog
      </button> */}
    </div>
  );
};

export default NavButtons;
