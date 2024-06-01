import CarSwiper from "../../components/CarSwiper/CarSwiper";
import { useGetData } from "../../store";
import styles from "./Home.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import CarCard from "../../components/CarCard/CarCard";
import { NavLink } from "react-router-dom";

const Home = () => {
  const getData = useGetData();

  return (
    <section id="home">
      <div className="container-fluid">
        <div className="row">
          <CarSwiper cars={getData.cars} />
        </div>
      </div>
      <div className="row mt-2 mb-4">
        <div className="col-lg-6">
          <h2 className={styles.sectionTitle}>Rent cars</h2>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center">
          <NavLink to={"/brands"} className={styles.viewMore}>
            <div>View more cars</div>
            <div className="ms-2">
              <FaArrowRightLong />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="row">
        {getData.cars.slice(0, 4).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default Home;
