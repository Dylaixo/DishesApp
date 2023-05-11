import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { notification: { message: '', type: '', open: false } },
    reducers: {
        showNotification(
            state: {
                notification: {
                    message: string,
                    type: string,
                    open: boolean
                }
            }, action) {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})
export const uiActions = uiSlice.actions

export default uiSlice;