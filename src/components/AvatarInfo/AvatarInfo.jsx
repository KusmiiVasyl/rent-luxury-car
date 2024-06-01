import { FaRegUserCircle } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import styles from "./AvatarInfo.module.css";
import { useStore } from "../../store";

const AvatarInfo = () => {
  const isUserRegister = useStore((state) => state.isUserRegister);
  const user = useStore((state) => state.user);

  return (
    <>
      {isUserRegister ? (
        <div className={styles.avatar}>
          <div>
            {user.photo ? (
              <img src={user.photo} alt="" />
            ) : (
              <div className={styles.userIcon}>
                <FaRegUserCircle />
              </div>
            )}
          </div>
          <div className={styles.user}>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </div>
        </div>
      ) : (
        <div className={styles.register}>
          <div>
            <FaUserTie />
          </div>
          <div className={styles.text}>
            <p>User info</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AvatarInfo;
