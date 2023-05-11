import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const typeSlice = createSlice({
  name: 'type',
  initialState: { isClicked: false, type: '' },
  reducers: {
    change: (state, action: PayloadAction<{ type: string }>) => {
      state.isClicked = true;
      state.type = action.payload.type;
    },
  },
});
export const typeActions = typeSlice.actions;

export default typeSlice;