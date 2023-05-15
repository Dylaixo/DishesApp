import {  combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { configureStore } from '@reduxjs/toolkit';
import typeSlice from './type-slice';
import popupSlice from './popup-slice';

const rootReducer = combineReducers({
  type: typeSlice.reducer,
  form: formReducer,
  popup: popupSlice.reducer
})

const store = configureStore({
  reducer: rootReducer,
})
export default store;