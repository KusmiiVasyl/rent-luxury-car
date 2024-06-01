import { IoMdAdd } from "react-icons/io";
import styles from "./AddPhotoFieldForm.module.css";
import { useState } from "react";
import { useStore } from "../../../store";

const AddPhotoFieldForm = ({ register, watch }) => {
  const photo = useStore((state) => state.user.photo);
  const [image, setImage] = useState("");

  const handleImageChange = () => {
    setImage(watch("photo")[0]);
  };

  return (
    <div className={styles.addPhoto}>
      <p>Add photo</p>
      <label onChange={handleImageChange}>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="" />
        ) : photo ? (
          <img src={photo} alt="" />
        ) : (
          <IoMdAdd />
        )}
        <input type="file" id="photo" accept="image/*" {...register("photo")} />
      </label>
    </div>
  );
};

export default AddPhotoFieldForm;
