// import icon
import { FaPause, FaPlay } from "react-icons/fa6";
import "./CarSlider.css";
import { useStore } from "../../store";

const CarSlider = ({ car, active, toggleVideo }) => {
  const toggleActiveModal = useStore((state) => state.handleToggleActiveModal);
  const modalContent = useStore((state) => state.modalContent);

  return (
    <div className="carSlider">
      <img src={car.img} alt={car.name} />
      <div className={`video ${active ? "active" : ""}`}>
        <iframe
          src={car.trailer}
          width="1280"
          height="720"
          title={`${car.brand} ${car.model}`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content">
        <h2>{car.brand}</h2>
        <h3>{car.model}</h3>
        <div className="btns">
          <div
            className="btnCarDetail"
            onClick={() => toggleActiveModal(car, modalContent.CarDetail)}
          >
            More Details
          </div>
          <div
            className={`btnCarTrailer ${active ? "active" : ""}`}
            onClick={toggleVideo}
          >
            <span className="pause">
              <FaPause />
            </span>
            <span className="play">
              <FaPlay />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSlider;
