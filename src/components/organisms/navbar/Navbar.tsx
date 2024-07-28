import React, { useState } from "react";
import NavButtons from "@/components/atoms/buttons/NavButtons";
import Logo from "@/components/atoms/logo/Logo";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

import ThemeToggle from "../themetoggle/ThemeToggle";

import { useGlobalContext } from "../../../../context/AppContext";
import ProductsMenu from "../productsmenu/ProductMenu";

const Navbar = ({ arrow }: any) => {
  const { theme } = useGlobalContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductMenu, setProductMenu] = useState(false);

  const toggleMobileMenu = () => {
    setProductMenu(!isProductMenu);
  };
  const toggleMenuButton = () => {
    setIsMenuOpen(!isMenuOpen);
    setProductMenu(false);
  };
  return (
    <div className="nav-container">
      <div className={`${theme === "light" ? "navbar" : "navbar dark"}`}>
        <div className="nav-left">
          {arrow}
          <Logo />

          <div className="nav-buttons ">
            <NavButtons
              setProductMenu={setProductMenu}
              isProductMenu={isProductMenu}
            />
          </div>
        </div>

        <div className="links nav-right">
          <ThemeToggle />

          <div className="free-button">
            <GetFreeButton />
          </div>

          <button onClick={toggleMenuButton} className="menu-button">
            {isMenuOpen ? (
              <IoClose className="menu-icon" />
            ) : (
              <RiMenu4Line className="menu-icon" />
            )}
          </button>
        </div>
      </div>
      <div className="modal">
        {isProductMenu && <ProductsMenu setProductMenu={setProductMenu} />}
      </div>

      {/* mobile navigation bar section*/}

      <div>
        {isMenuOpen && (
          <div className={theme === "light" ? "mobile-nav" : "mobile-nav dark"}>
            <div className="mobile-menu">
              <div>
                <div
                  className={"mobile-button button2"}
                  onClick={toggleMobileMenu}
                >
                  <div className={theme === "light" ? "lightp" : "lightp dark"}>
                    Products
                  </div>
                  <div>
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
                  </div>
                </div>
                {isProductMenu && (
                  <ProductsMenu setProductMenu={setProductMenu} />
                )}
              </div>
              {/* <div
                className={
                  theme === "light" ? "mobile-button" : "mobile-button dark"
                }
              >
                Support
              </div> */}
              {/* 
              <div
                className={
                  theme === "light" ? "mobile-button" : " mobile-button dark"
                }
              >
                Blog
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
