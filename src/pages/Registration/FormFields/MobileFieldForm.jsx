import styles from "./MobileFieldForm.module.css";
import { mobileCode } from "../../../data/mobileCode";
import { useStore } from "../../../store";

const MobileFieldForm = ({ register, errors }) => {
  const mobile = useStore((state) => state.user.mobile);
  const codeMobile = useStore((state) => state.user.codeMobile);

  return (
    <div className="input-group">
      <div className={styles.phoneNumberContainer}>
        <select
          className="form-select rounded-end-0"
          id="codeMobile"
          defaultValue={codeMobile ? codeMobile : "US +1"}
          {...register("codeMobile")}
        >
          {mobileCode.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="number"
          id="mobile"
          className="form-control rounded-start-0"
          defaultValue={mobile}
          placeholder="Mobile"
          {...register("mobile", {
            required: { value: true, message: "Mobile is required" },
            maxLength: { value: 10, message: "Max length is 10" },
          })}
        />
      </div>
      <p>{errors.mobile?.message}</p>
    </div>
  );
};

export default MobileFieldForm;
