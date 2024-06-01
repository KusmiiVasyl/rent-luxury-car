import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./CarSwiper.css";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import CarSlider from "../CarSlider/CarSlider";
import { useState } from "react";

const CarSwiper = ({ cars }) => {
  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive(!active);
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
    >
      {cars?.map((car) => (
        <SwiperSlide key={car.id} className="carSwiper">
          <CarSlider
            car={car}
            active={active}
            toggleVideo={handleToggleActive}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarSwiper;
