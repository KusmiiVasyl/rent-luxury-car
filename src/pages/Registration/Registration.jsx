import { useForm } from "react-hook-form";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import styles from "./Registration.module.css";
import AddPhotoFieldForm from "./FormFields/AddPhotoFieldForm";
import FirstNameFieldForm from "./FormFields/FirstNameFieldForm";
import LastNameFieldForm from "./FormFields/LastNameFieldForm";
import MobileFieldForm from "./FormFields/MobileFieldForm";
import EmailFieldForm from "./FormFields/EmailFieldForm";
import AgeFieldForm from "./FormFields/AgeFieldForm";
import DrivingExperience from "./FormFields/DrivingExperience";
import { useStore } from "../../store";
import {useNavigate} from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const registerUser = useStore((state) => state.registerUser);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userPhoto = useStore((state) => state.user.photo);

  const onSubmit = (data) => {
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      codeMobile: data.codeMobile,
      mobile: data.mobile,
      email: data.email,
      age: data.age,
      drivingExperience: data.drivingExperience,
      photo: data.photo[0] ? URL.createObjectURL(data.photo[0]) : userPhoto,
    };
    registerUser(user);
    navigate('/')
  };

  return (
    <section id="registration">
      <div className={styles.formContainer}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h3>User info</h3>
          <FirstNameFieldForm {...{ register, errors }} />
          <LastNameFieldForm {...{ register, errors }} />
          <MobileFieldForm {...{ register, errors }} />
          <EmailFieldForm {...{ register, errors }} />
          <AgeFieldForm {...{ register, errors }} />
          <DrivingExperience {...{ register, errors }} />
          <AddPhotoFieldForm {...{ register, watch }} />
          <div className={styles.submit}>
            <button type="submit">
              <TbArrowBigRightLineFilled />
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
