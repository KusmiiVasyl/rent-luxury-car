import styles from "./Social.module.css";
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { useStore } from "../../store";

const Social = () => {
  const active = useStore((state) => state.activeHeaderSlideIcon);

  return (
    <>
      <ul className={styles.social + (active ? " " + styles.active : "")}>
        <li>
          <a href="#" title="Facebook">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="#" title="Youtube">
            <IoLogoYoutube />
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#" className={styles.share} title="Share Link">
            <MdShare />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
