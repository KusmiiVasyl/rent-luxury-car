import styles from "./EmailFieldForm.module.css";
import { useStore } from "../../../store";

const EmailFieldForm = ({ register, errors }) => {
const email = useStore((state) => state.user.email);

  return (
    <div>
      <input
        type="email"
        className="form-control"
        id="email"
        defaultValue={email}
        placeholder="Email address"
        {...register("email", {
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address",
          },
          required: { value: true, message: "Email is required" },
        })}
      />
      <p>{errors.email?.message}</p>
    </div>
  );
};

export default EmailFieldForm;
