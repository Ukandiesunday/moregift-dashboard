import MoreGiftLogo from "../../../components/logo/MoregiftLogo";
import SidebarLinks from "../sidebarLinks/SidebarLinks";
import styles from "./sidebar.module.scss";

type sideBarProps = {
  title: string;
  path: string;
  icon: string;
};

const sideBarItems: sideBarProps[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "/icons/home.svg",
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: "/icons/settings.svg",
  },
  {
    title: "Beneficiaries",
    path: "/dashboard/beneficiaries",
    icon: "/icons/user.svg",
  },
  {
    title: "Gifting events",
    path: "/dashboard/gifting-events",
    icon: "/icons/gift.svg",
  },
];

const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
      <MoreGiftLogo />

      <div>
        {sideBarItems.map((link, i) => (
          <SidebarLinks
            title={link.title}
            path={link.path}
            icon={link.icon}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
