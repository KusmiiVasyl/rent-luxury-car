import { PiWarningFill } from "react-icons/pi";
import styles from "./NotificationModal.module.css";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

const NotificationModal = () => {
  const resetActiveNotificationModal = useStore(
    (state) => state.resetActiveNotificationModal
  );

  const handleConfirmBtn = () => {
    resetActiveNotificationModal();
    navigate("/registration");
  };

  const navigate = useNavigate();
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <PiWarningFill />
        </div>
        <div className={styles.messageContainer}>
          <p>
            To rent a car, you must first enter information about the user !!!
          </p>
        </div>
        <div className={styles.btnContainer}>
          <button
            className={styles.cancelBtn}
            onClick={resetActiveNotificationModal}
          >
            Cancel
          </button>
          <button className={styles.confirmBtn} onClick={handleConfirmBtn}>
            To enter user info
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
