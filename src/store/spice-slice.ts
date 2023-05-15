import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const spiceSlice = createSlice({
    name: 'spice',
    initialState: { spiceLv: 0, showLv: false },
    reducers: {
        spiceLevel: (state, action: PayloadAction<number>) => {
            state.spiceLv = action.payload;
        },
        showSpiceLevel: (state) => {
            state.showLv = true
        }
    },
});

export const spiceActions = spiceSlice.actions;
export const spiceReducer = spiceSlice.reducer; // Dodaj wyeksportowanie reduktora

export default spiceSlice; // Usuń wyeksportowanie poprzedniego reduktora
