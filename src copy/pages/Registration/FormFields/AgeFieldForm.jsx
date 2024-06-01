import styles from "./AgeFieldForm.module.css";
import { useStore } from "../../../store";

const AgeFieldForm = ({ register, errors }) => {
const age = useStore((state) => state.user.age);

  return (
    <div>
      <input
        type="number"
        className="form-control"
        id="age"
        placeholder="Your age"
        defaultValue={age}
        min="18"
        max="100"
        required
        {...register("age", {
          required: {
            value: true,
            message: "Age is required",
          },
          min: { value: 18, message: "Age is less than 18" },
          max: { value: 100, message: "Age is more than 100" },
        })}
      />
      <p>{errors.age?.message}</p>
    </div>
  );
};

export default AgeFieldForm;
