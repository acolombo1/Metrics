import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import DataReducer from './datareducer';

const Store = configureStore({
  reducer: {
    coins: DataReducer,
  },
  middleware: [thunk],
});

export default Store;
