import create from "zustand";

export interface ValuesType {
  name: string;
  email: string;
  address: { city: string; street: string };
  gender: string;
  phone: string;
  id: number;
}

interface Store {
  values: ValuesType;
  setValues: (data: ValuesType) => void;
}

const useValuesStore = create<Store>((set) => ({
  values: {
    name: "",
    email: "",
    address: { city: "", street: "" },
    gender: "",
    phone: "",
    id: 0,
  },
  setValues: (data: ValuesType) => {
    set(() => ({ values: data }));
  },
}));

export default useValuesStore;
