import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: window.innerWidth < 769,
  showModal: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { toggleModal, setIsMobile } = navbarSlice.actions;
export default navbarSlice.reducer;
