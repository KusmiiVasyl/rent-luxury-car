import styles from "./Brands.module.css";
import { useGetData } from "../../store";
import { useState } from "react";
import CarCard from "../../components/CarCard/CarCard";

const Brands = () => {
  const carsfilterOptions = useGetData((state) => state.filterOptions);
  const cars = useGetData((state) => state.cars);
  const [filterOption, setFilterOption] = useState(carsfilterOptions[0].value);
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const showCarCards = () => {
    if (searchText) {
      return cars
        .filter(
          (car) =>
            car.brand.toLowerCase().includes(searchText.toLowerCase().trim()) ||
            car.model.toLowerCase().includes(searchText.toLowerCase().trim())
        )
        .map((car) => (
          <CarCard key={car.id} car={car} searchText={searchText} />
        ));
    }

    return filterOption === carsfilterOptions[0].value
      ? cars.map((car) => <CarCard key={car.id} car={car} />)
      : cars
          .filter((car) => car.brand === filterOption)
          .map((car) => <CarCard key={car.id} car={car} />);
  };

  return (
    <section id="brands">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-start align-items-center">
            <select
              className={styles.filters}
              onChange={handleFilterChange}
              onClick={() => setSearchText("")}
              value={filterOption}
            >
              {carsfilterOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col d-flex align-items-center justify-content-lg-end justify-content-sm-start">
            <div className={styles.search} title="Search by brand or model">
              <i className="bi bi-search"></i>
              <input
                type="text"
                name="search"
                value={searchText}
                placeholder="Search"
                onChange={handleSearch}
                onClick={() => setFilterOption(carsfilterOptions[0].value)}
              />
            </div>
          </div>
        </div>
        <div className="row">{showCarCards()}</div>
      </div>
    </section>
  );
};

export default Brands;
