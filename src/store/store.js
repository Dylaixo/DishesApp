import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { configureStore } from '@reduxjs/toolkit';
import typeSlice from './type-slice';

const rootReducer = combineReducers({
  type: typeSlice.reducer,
  form: formReducer,
})

const store = configureStore({
  reducer: rootReducer,
})
export default store;