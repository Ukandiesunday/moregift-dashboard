"use client";
import Link from "next/link";
import styles from "./sidebarlinks.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SidebarLinks = ({
  title,
  icon,
  path,
}: {
  title: string;
  icon: string;
  path: string;
}) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={path}
        className={`${styles.links_wrapper} ${
          pathName === path && styles.active
        }`}
      >
        <Image src={icon} alt="" width={20} height={20} />
        <span className={styles.title}>{title}</span>
      </Link>
    </div>
  );
};

export default SidebarLinks;
