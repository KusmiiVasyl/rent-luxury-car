import styles from "./DrivingExperience.module.css";
import { useStore } from "../../../store";

const DrivingExperience = ({ register, errors }) => {
const experience = useStore((state) => state.user.drivingExperience);

  return (
    <div>
      <input
        type="number"
        className="form-control"
        id="drivingExperience"
        placeholder="Driving experience"
        defaultValue={experience}
        min="0"
        max="100"
        {...register("drivingExperience", {
          required: {
            value: true,
            message: "Driving experience is required",
          },
          min: { value: 0, message: "Invalid value" },
          max: { value: 150, message: "Invalid value" },
        })}
      />
      <p>{errors.drivingExperience?.message}</p>
    </div>
  );
};

export default DrivingExperience;
