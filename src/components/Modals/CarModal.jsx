import { VscChromeClose } from "react-icons/vsc";
import styles from "./CarModal.module.css";
import { useStore } from "../../store";
import CarDetails from "../CarDetails/CarDetails";
import RentCarForm from "../RentCarForm/RentCarForm";

const CarModal = () => {
  const carForDetail = useStore((state) => state.carForDetail);
  const carForRent = useStore((state) => state.carForRent);
  const chooseModalContent = useStore((state) => state.chooseModalContent);
  const toggleActiveModal = useStore((state) => state.handleToggleActiveModal);

  return (
    <div className={styles.modal}>
      <div className="d-flex flex-column">
        <div className={styles.close}>
          <span>
            <VscChromeClose onClick={toggleActiveModal} />
          </span>
        </div>
        <div className={styles.content}>
          {chooseModalContent.carDetail && <CarDetails car={carForDetail} />}
          {chooseModalContent.rentCar && <RentCarForm car={carForRent} />}
        </div>
      </div>
    </div>
  );
};

export default CarModal;
