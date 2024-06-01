import styles from "./RentCarForm.module.css";
import RentDateRange from "./RentDateRange";

const RentCarForm = ({ car }) => {
  return (
    <div className={styles.mainContainer}>
      <h3>Request rent form</h3>
      <div className={`d-flex flex-column flex-sm-row ${styles.carContainer}`}>
        <div
          className={`d-flex flex-column w-100 text-nowrap ${styles.infoContainer}`}
        >
          <h6>Your rent car:</h6>
          <p>
            Brand: <span>{car.brand}</span>{" "}
          </p>
          <p>
            Model: <span>{car.model}</span>{" "}
          </p>
          <p>
            Color: <span>{car.color}</span>{" "}
          </p>
          <p>
            Year: <span>{car.year}</span>{" "}
          </p>
          <p>
            Price: <span>{car.price}$/hour</span>{" "}
          </p>
        </div>
        <div className={`d-flex w-100 ${styles.imgContainer}`}>
          <img src={car.img} alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-center w-100">
        <hr className="w-50  text-light" />
      </div>
      <div className={styles.formContainer}>
        <RentDateRange car={car} />
      </div>
    </div>
  );
};

export default RentCarForm;
