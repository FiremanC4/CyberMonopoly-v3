import { create } from "zustand";

type ModalKey = string;

interface IuseModalStore {
  hostOrConnect: "Host" | "Connect";
  setHost: () => void;
  setConnect: () => void;
  modals: Record<ModalKey, boolean>;
  openModal: (modalName: ModalKey) => void;
  closeModal: (modalName: ModalKey) => void;
}

export const useModalStore = create<IuseModalStore>((set) => ({
  hostOrConnect: "Host",
  setHost: () => set({ hostOrConnect: "Host" }),
  setConnect: () => set({ hostOrConnect: "Connect" }),

  modals: {
    isHostOrConnectOpen: false,
    isHelpOpen: false,
    isPlayOpen: false,
  },

  openModal: (modalName) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [modalName]: true,
      },
    })),

  closeModal: (modalName) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [modalName]: false,
      },
    })),
}));
