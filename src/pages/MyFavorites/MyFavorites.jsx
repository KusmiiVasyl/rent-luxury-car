import { useStore } from "../../store";
import styles from "./MyFavorites.module.css";
import CarCard from "../../components/CarCard/CarCard";

const MyFavorites = () => {
  const favoriteCars = useStore((state) => state.favoriteCars);

  return (
    <section id="myFavorites" className="myFavorites">
      <div className="fluid-container">
        <div className="row mt-3 mb-5">
          <h2>My Favorite Cars</h2>
        </div>
        <div className="row">
          {favoriteCars.length > 0 ? (
            favoriteCars.map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <div>
              <p className="noDataText">No favorite cars</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyFavorites;
