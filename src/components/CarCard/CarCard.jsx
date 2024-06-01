import styles from "./CarCard.module.css";
import { FaHeart } from "react-icons/fa6";
import { GrAddCircle } from "react-icons/gr";
import { useStore } from "../../store";

const CarCard = ({ car, searchText }) => {
  const favoriteCars = useStore((state) => state.favoriteCars);
  const handleFavoriteCars = useStore((state) => state.handleFavoriteCars);
  const addCarToGarage = useStore((state) => state.addCarToGarage);
  const toggleActiveModal = useStore((state) => state.handleToggleActiveModal);
  const modalContent = useStore((state) => state.modalContent);

  const highlightMatch = (text) => {
    if (!searchText) {
      return text;
    }
    const regex = new RegExp(`(${searchText})`, "gi");
    return text.split(regex).map((substring, index) => {
      if (substring.toLowerCase() === searchText.toLowerCase()) {
        return (
          <span key={index} className={styles.highlight}>
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6"
      onDoubleClick={() => toggleActiveModal(car, modalContent.CarDetail)}
    >
      <div className={styles.carCard}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className="img-fluid"
        />
        <div
          className={`${styles.like} ${
            favoriteCars.includes(car) ? styles.active : ""
          }`}
          title="Add to favorite"
          onClick={() => {
            handleFavoriteCars(car);
          }}
        >
          <FaHeart />
        </div>
        <div className={styles.carDetails}>
          <div className={styles.carBrand}>{highlightMatch(car.brand)}</div>
          <div className={styles.carModel}>{highlightMatch(car.model)}</div>
          <div className="d-flex justify-content-center">
            <hr className="w-75  text-light" />
          </div>
          <div className={styles.carCharacteristics}>
            <h6>Characteristics</h6>
            <p>
              Year: <span>{car.year}</span>
            </p>
            <p>
              Engine: <span>{car.engine}</span>
            </p>
            <p>
              Power: <span>{car.power}</span>
            </p>
            <p>
              Top speed: <span>{car.max_speed}</span>
            </p>
            <p>
              Acceleration 0-100: <span>{car.acceleration}</span>
            </p>
            <p>
              Color: <span>{car.color}</span>
            </p>
            <p>
              Seats: <span>{car.seets}</span>
            </p>
            <p>
              Doors: <span>{car.doors}</span>{" "}
            </p>
            <p>
              Consumption: <span>{car.consumption}</span>
            </p>
            <p>
              Interior: <span>{car.interior}</span>
            </p>
            <p>
              Gearbox: <span>{car.gearbox}</span>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-2">
          <hr className="w-50  text-light" />
        </div>
        <div className={styles.carPrice}>{car.price.toFixed(0)}$ / hour</div>
        <div
          className={styles.addToGarage}
          onClick={() => addCarToGarage(car)}
          title="Add to garage"
        >
          <GrAddCircle className="fs-4" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
