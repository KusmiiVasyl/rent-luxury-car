import RentCarItem from "../../components/RentCarItem/RentCarItem";
import { useStore } from "../../store";
import styles from "./MyGarage.module.css";

const MyGarage = () => {
  const carsInGarage = useStore((state) => state.carsInGarage);

  return (
    <section id="myGarage" className="myGarage">
      <div className="container-fluid">
        <div className="row mt-3 mb-5">
          <h2>My Garage</h2>
        </div>
        {carsInGarage.length === 0 ? (
          <div>
            <p className="noDataText">No cars in garage</p>
          </div>
        ) : (
          <div className="row">
            <div className={`table-responsive ${styles.tableContainer}`}>
              <table
                className={`table table-borderless align-middle ${styles.garageCarTable}`}
              >
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Preview</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Year</th>
                    <th scope="col">Color</th>
                    <th scope="col">
                      Price <span className={styles.textPrice}>$/hour</span>
                    </th>
                    <th scope="col">Rent</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {carsInGarage.map((car, index) => (
                    <RentCarItem key={car.id} car={car} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyGarage;
