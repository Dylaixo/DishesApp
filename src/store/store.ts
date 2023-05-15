import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { configureStore } from '@reduxjs/toolkit';
import typeSlice from './type-slice';
import popupSlice from './popup-slice';
import spiceSlice from './spice-slice';


const rootReducer = combineReducers({
  type: typeSlice.reducer,
  popup: popupSlice.reducer,
  spice: spiceSlice.reducer,
  form: formReducer
})

const store = configureStore({
  reducer: rootReducer,
})
export default store;