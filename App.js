import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';

const store = configureStore({
  reducer: weatherReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
