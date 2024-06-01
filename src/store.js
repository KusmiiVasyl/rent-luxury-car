import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "./constants/index";

export const useStore = create((set, get) => ({
  activeHeaderSlideIcon: false,
  handleToggleActiveHeaderSlideIcon: () =>
    set((state) => ({
      activeHeaderSlideIcon: !state.activeHeaderSlideIcon,
    })),
  favoriteCars: [],
  handleFavoriteCars: (car) => {
    if (get().favoriteCars.includes(car)) {
      set((state) => ({
        favoriteCars: state.favoriteCars.filter((c) => c.id !== car.id),
      }));
    } else {
      set((state) => ({ favoriteCars: [...state.favoriteCars, car] }));
    }
  },
  carsInGarage: [],
  addCarToGarage: (car) => {
    if (get().carsInGarage.includes(car)) {
      toast.info(`This ${car.brand.toUpperCase()} is already in garage`);
      return;
    }
    set((state) => ({ carsInGarage: [...state.carsInGarage, car] }));
  },
  removeCarFromGarage: (id) => {
    set((state) => ({
      carsInGarage: state.carsInGarage.filter((car) => car.id !== id),
    }));
  },
  isActiveModal: false,
  carForDetail: null,
  carForRent: null,
  chooseModalContent: { carDetail: false, rentCar: false },
  modalContent: { CarDetail: "CarDetail", CarRent: "CarRent" },
  handleToggleActiveModal: (car, content) => {
    if (!content) {
      set(() => ({ isActiveModal: false }));
      return;
    }
    if (get().modalContent.CarDetail === content) {
      set(() => ({
        carForDetail: car,
        chooseModalContent: { carDetail: true, rentCar: false },
        isActiveModal: true,
      }));
    }
    if (get().modalContent.CarRent === content) {
      set(() => ({
        carForRent: car,
        chooseModalContent: { carDetail: false, rentCar: true },
        isActiveModal: true,
      }));
    }
  },
  isActiveNotificationModal: false,
  checkIsUserRegister: () => {
    if (get().isUserRegister) {
      set(() => ({ isActiveNotificationModal: false }));
      return false;
    } else {
      set(() => ({
        isActiveNotificationModal: true,
        isActiveModal: false,
      }));
      return true;
    }
  },
  resetActiveNotificationModal: () => {
    set(() => ({ isActiveNotificationModal: false }));
  },
  isUserRegister: false,
  user: {
    firstName: "",
    lasttName: "",
    codeMobile: "",
    mobile: "",
    email: "",
    age: null,
    drivingExperience: null,
    photo: "",
  },
  registerUser: (user) => {
    set(() => ({ user: user, isUserRegister: true }));
    if (get().isUserRegister) toast.success("User info saved successfully");
  },
}));

// get data from api
const initialState = {
  loading: false,
  success: false,
  error: false,
  cars: [],
  filterOptions: [{ id: 1, value: "ALL", label: "ALL" }],
  errorData: null,
};

export const useGetData = create((set, get) => ({
  ...initialState,

  getCars: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get(URL.CARS);
      if (res.status === 200) {
        set({ ...initialState, cars: res.data, success: true, loading: false });
        set({
          filterOptions: [
            ...get().filterOptions,
            ...handleCarsFIlterItems(res.data, get().filterOptions),
          ],
        });
      }
    } catch (error) {
      set({
        ...initialState,
        error: true,
        errorData: error.message,
        loading: false,
      });
    }
  },
}));

const handleCarsFIlterItems = (cars, filterOptions) => {
  const carBrands = [...new Set(cars.map((car) => car.brand))];
  carBrands.sort((a, b) => a.localeCompare(b));
  const newFilterItems = carBrands.map((brand, index) => ({
    id: filterOptions.length + index + 1,
    value: brand.toUpperCase(),
    label: brand.toUpperCase(),
  }));
  return newFilterItems;
};
