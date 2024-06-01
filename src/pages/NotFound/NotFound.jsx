import { useGetData } from "../../store";
import styles from "./NotFound.module.css";
import { BiSolidError } from "react-icons/bi";

const NotFound = () => {
  const { errorData } = useGetData();

  if (errorData) {
    console.log("ERROR: " + errorData);
  }

  return (
    <div className={styles.notFound}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className={styles.icon}>
          <BiSolidError />
        </div>
        <div className={styles.text}>Page or Data Not Found</div>
      </div>
    </div>
  );
};

export default NotFound;
