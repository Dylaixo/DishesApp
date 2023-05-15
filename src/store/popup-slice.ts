import { createSlice } from "@reduxjs/toolkit";


const popupSlice = createSlice({
  name: 'popup',
  initialState: { showPopup: false },
  reducers: {
    change: (state) => {
      state.showPopup = !state.showPopup;
    }
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice;