import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: 'popup',
  initialState: { isClicked: false },
  reducers: {
    change: (state, action) => {
      state.isClicked = !state.isClicked;
    },
  },
});
export const popupActions = popupSlice.actions;

export default popupSlice;