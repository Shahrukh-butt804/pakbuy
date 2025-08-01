// redux/slices/modalSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isRegisterModalOpen: boolean;
}

const initialState: ModalState = {
  isRegisterModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openRegisterModal: (state) => {
      state.isRegisterModalOpen = true;
    },
    closeRegisterModal: (state) => {
      state.isRegisterModalOpen = false;
    },
    toggleRegisterModal: (state) => {
      state.isRegisterModalOpen = !state.isRegisterModalOpen;
    },
  },
});

export const { openRegisterModal, closeRegisterModal, toggleRegisterModal } = modalSlice.actions;
export default modalSlice.reducer;
