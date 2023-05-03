import create from "zustand";

export interface DataType {
  address: { street: string; city: string };
  email: string;
  gender: string;
  id: number;
  name: string;
  phone: string;
}

interface Store {
  data: DataType[];
  setData: (data: DataType[]) => void;
  remove: (data: number) => void;
  modal: boolean;
  setModal: (data: boolean) => void;
  addData: (data: DataType) => void;
  edit: (data: DataType) => void;
}

const useStore = create<Store>((set) => ({
  data: [],
  setData: (data: DataType[]) => {
    set(() => ({ data: data }));
  },
  addData: (data: DataType) => {
    set((state) => ({ data: [...state.data, data] }));
  },
  remove: (id: number) => {
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    }));
  },
  modal: false,
  setModal: (modal) => {
    set(() => ({ modal: modal }));
  },
  edit: (x: DataType) => {
    set((state) => ({
      data: state.data.map((item) => (item.id === x.id ? x : item)),
    }));
  },
}));

export default useStore;
