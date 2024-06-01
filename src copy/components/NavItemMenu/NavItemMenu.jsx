import { NavLink } from "react-router-dom";
import styles from "./NavItemMenu.module.css";

const NavItemMenu = ({ item }) => {
  return (
    <NavLink
      className={({isActive}) => (isActive ? styles.active : "")}
      to={item.path}
      title={item.name}
    >
      <span>
        <i className={item.icon}></i>
      </span>
      <span>{item.name}</span>
    </NavLink>
  );
};

export default NavItemMenu;
