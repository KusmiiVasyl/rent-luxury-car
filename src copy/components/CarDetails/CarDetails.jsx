import { SiFastify } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";
import { GrAddCircle } from "react-icons/gr";
import { GiCarKey } from "react-icons/gi";
import styles from "./CarDetails.module.css";
import { useStore } from "../../store";

const CarDetails = ({ car }) => {
  const favoriteCars = useStore((state) => state.favoriteCars);
  const handleFavoriteCars = useStore((state) => state.handleFavoriteCars);
  const addCarToGarage = useStore((state) => state.addCarToGarage);
  const handleToggleActiveModal = useStore(
    (state) => state.handleToggleActiveModal
  );
  const modalContent = useStore((state) => state.modalContent);
  const checkIsUserRegister = useStore((state) => state.checkIsUserRegister);

  const handleRentCar = () => {
    if (checkIsUserRegister()) return;
    handleToggleActiveModal(car, modalContent.CarRent);
  };

  return (
    <div className={styles.carDetails}>
      <div className={styles.brand}>{car.brand}</div>
      <div className={styles.model}>{car.model}</div>
      <div className={styles.imgContainer}>
        <img src={car.img} alt={`${car.brand} ${car.model}`} />
      </div>
      <div className={styles.price}>
        <span>Rent price: </span> {car.price}$/hour
      </div>
      <div className={styles.btnActions}>
        <div
          className={`${styles.favorite} ${
            favoriteCars.includes(car) ? styles.activeFavorite : ""
          }`}
          title="Add to favorite"
          onClick={() => handleFavoriteCars(car)}
        >
          <FaHeart />
        </div>
        <div className={styles.rent} title="Rent car" onClick={handleRentCar}>
          <GiCarKey />
        </div>
        <div
          className={styles.addToGarage}
          onClick={() => addCarToGarage(car)}
          title="Add to garage"
        >
          <GrAddCircle />
        </div>
      </div>
      <div className={styles.characteristics}>
        <h4>Characteristics</h4>
        <p>
          year:
          <span>{car.year}</span>
        </p>
        <p>
          engine:
          <span>{car.engine}</span>
        </p>
        <p>
          power:
          <span>{car.power}</span>
        </p>
        <p>
          top speed:
          <span>{car.max_speed}</span>
        </p>
        <p>
          acceleration 0-100:
          <span>{car.acceleration}</span>
        </p>
        <p>
          color:
          <span>{car.color}</span>
        </p>
        <p>
          seets:
          <span>{car.seets}</span>
        </p>
        <p>
          doors:
          <span>{car.doors}</span>
        </p>
        <p>
          consumption:
          <span>{car.consumption}</span>
        </p>
        <p>
          interior:
          <span>{car.interior}</span>
        </p>
        <p>
          gearbox:
          <span>{car.gearbox}</span>
        </p>
      </div>
      <div className={styles.endIcon}>
        <SiFastify />
      </div>
    </div>
  );
};

export default CarDetails;
