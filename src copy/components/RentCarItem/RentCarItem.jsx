import { useStore } from "../../store";
import styles from "./RentCarItem.module.css";
import { GiCarKey } from "react-icons/gi";

const RentCarItem = ({ car, index }) => {
  const removeCarFromGarage = useStore((state) => state.removeCarFromGarage);
  const handleToggleActiveModal = useStore(
    (state) => state.handleToggleActiveModal
  );
  const modalContent = useStore((state) => state.modalContent);
  const checkIsUserRegister = useStore((state) => state.checkIsUserRegister);

  const handleRemoveCar = (id) => {
    removeCarFromGarage(id);
  };

  const handleRentCar = () => {
    if (checkIsUserRegister()) return;
    handleToggleActiveModal(car, modalContent.CarRent);
  };

  return (
    <tr className={styles.rentCarItem}>
      <th scope="row">{index + 1}</th>
      <td>
        <img src={car.img} alt={`${car.brand} ${car.model}`} />
      </td>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>${car.price.toFixed(0)}</td>
      <td className={styles.rentIcon} title="Rent car" onClick={handleRentCar}>
        <GiCarKey />
      </td>
      <td
        className={styles.removeIcon}
        title="Remove car from garage"
        onClick={() => handleRemoveCar(car.id)}
      >
        <i className="bi bi-trash3"></i>
      </td>
    </tr>
  );
};

export default RentCarItem;
