"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { FC, useState } from "react";
import UserModal from "./usermodal/UserModal";
import Button from "../button/Button";

import { useRouter } from "next/navigation";
interface NavbarProps {
  toggleSendModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSendModal }) => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleUserProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.nav_left}>
        <Image src="/icons/zenith.svg" alt="" width={141} height={45} />
      </div>
      <div className={styles.nav_right}>
        <Button
          onClick={toggleSendModal}
          label={" Send Gift Cash"}
          image={<Image src="/icons/send.svg" alt="" width={18} height={18} />}
        />
        <div className={styles.user} onClick={toggleUserProfile}>
          <Image
            src="/images/person.svg"
            alt=""
            width={30}
            height={30}
            className={styles.img}
          />
          {isProfileOpen ? (
            <ChevronDownIcon className={styles.icon} />
          ) : (
            <ChevronUpIcon className={styles.icon} />
          )}
          <span className={styles.name}>
            Jonathan Oladanle <br />
            <span className={styles.admin}>Admin</span>
          </span>
          <div>{isProfileOpen && <UserModal />}</div>
        </div>
      </div>
      {/* {isSendModal && <SendModal toggleSendModal={toggleSendModal} />} */}
    </div>
  );
};

export default Navbar;
