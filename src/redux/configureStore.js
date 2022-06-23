import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import DataReducer from './datareducer';
import FilterReducer from './filterreducer';

const Store = configureStore({
  reducer: {
    coins: DataReducer,
    filter: FilterReducer,
  },
  middleware: [thunk],
});

export default Store;
