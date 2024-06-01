import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../Header/Header";
import styles from "./MainHub.module.css";
import { useStore, useGetData } from "../../store";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "../NotFound/NotFound";
import CarModal from "../../components/Modals/CarModal";
import { ToastContainer, Zoom } from "react-toastify";
import NotificationModal from "../../components/Modals/NotificationModal";

const MainHub = () => {
  const active = useStore((state) => state.activeHeaderSlideIcon);
  const isActiveModal = useStore((state) => state.isActiveModal);
  const isActiveNotificationModal = useStore(
    (state) => state.isActiveNotificationModal
  );
  const getData = useGetData();

  useEffect(() => {
    getData.getCars();
  }, []);

  return (
    <>
      <div className={styles.mainBlock}>
        <SideMenu active={active} />
        <div className={styles.banner + (active ? " " + styles.active : "")}>
          <Header />
          {getData.cars && getData.cars.length > 0 && <Outlet />}
          {getData.loading && <div className={styles.loading}>Loading...</div>}
          {getData.error && <NotFound />}
          {isActiveModal && <CarModal />}
          {isActiveNotificationModal && <NotificationModal />}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          limit={4}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Zoom}
        />
      </div>
      <div className={styles.infoBlock}>
        <hr />
        <p>
          <strong>Attention:</strong><br/> This website is designed for viewing on larger screens.<br/> Please
          use a device with a bigger screen for the best experience.
        </p>
        <hr />
      </div>
    </>
  );
};

export default MainHub;
