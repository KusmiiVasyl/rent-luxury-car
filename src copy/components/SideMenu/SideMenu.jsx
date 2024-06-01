import styles from "./SideMenu.module.css";
import { IoCarSport } from "react-icons/io5";
import Social from "../Social/Social";
import { useStore } from "../../store";
import NavItemMenu from "../NavItemMenu/NavItemMenu";
import { navItemsList } from "../../data/navItemsList";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const isExpandSideMenu = useStore((state) => state.activeHeaderSlideIcon);

  return (
    <div
      className={
        styles.sideMenuBlock + (isExpandSideMenu ? " " + styles.active : "")
      }
    >
      <NavLink to="/" className={styles.logo}>
        <IoCarSport />
        <span>Luxury car</span>
      </NavLink>
      <nav className={styles.nav}>
        {navItemsList.map((item) => (
          <NavItemMenu key={item.id} item={item} />
        ))}
      </nav>
      <Social />
    </div>
  );
};

export default SideMenu;
