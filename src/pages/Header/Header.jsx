import { BsSliders } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { PiGarageFill } from "react-icons/pi";
import styles from "./Hearder.module.css";
import { useStore } from "../../store";
import { NavLink } from "react-router-dom";
import AvatarInfo from "../../components/AvatarInfo/AvatarInfo";

const Header = () => {
  const toggleActive = useStore(
    (state) => state.handleToggleActiveHeaderSlideIcon
  );
  const countFavoriteCars = useStore((state) => state.favoriteCars.length);
  const countCarsInGarage = useStore((state) => state.carsInGarage.length);

  return (
    <header>
      <div className={styles.menu} onClick={toggleActive}>
        <BsSliders />
      </div>
      <div className={styles.userItems}>
        <NavLink to={"/favorites"} className={styles.icon}>
          <MdFavorite />
          <span className={styles.favorite}>{countFavoriteCars}</span>
        </NavLink>
        <NavLink to={"/garage"} className={styles.icon}>
          <PiGarageFill />
          <span className={styles.garage}>{countCarsInGarage}</span>
        </NavLink>
        <NavLink to={"/registration"} className={styles.registration}>
          <AvatarInfo />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
