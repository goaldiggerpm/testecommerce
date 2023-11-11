import { configureStore } from '@reduxjs/toolkit';
import { stockSlice } from './slices/stockSlice';

const reducer = {
    stock: stockSlice.reducer
};

const store = configureStore({
    reducer: reducer,
    devTools: true,
});

export default store;
