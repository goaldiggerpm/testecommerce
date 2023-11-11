import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../actions/getData';
// import { cloneDeep } from 'lodash';
//:IMP Refer this later https://jasonwatmore.com/redux-toolkit-fix-the-object-notation-for-createslice-extrareducers-is-deprecated-in-react 

export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        stockvalue: 0,
        stocksList: [],
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        reload: false
    },
    reducers: {
        increment(state) {
            state.stockvalue++
        },
        decrement(state) {
            state.stockvalue--
        },
        incrementByAmount(state, action) {
            state.stockvalue += action.payload
        },
        updateStatus(state, action) {
            const newArray = [...state.stocksList]
            const copyObject = { ...newArray[action.payload.col] }
            // console.log(cloneDeep(copyObject))
            copyObject['Status'] = action.payload.status
            newArray[action.payload.col] = { ...copyObject }
            // console.log(cloneDeep(copyObject))
            state.stocksList = newArray
            return state
        }
    },

    extraReducers: {
        [getData.pending]: (state) => {
            state.isFetching = true;
        },
        [getData.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },
        [getData.fulfilled]: (state, { payload }) => {
            // console.log('Im called here full filled', payload)
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
            // console.log('mnop:', { payload: cloneDeep(payload) });

            state.stocksList = payload === undefined ? [] : [...payload];
            // console.log('wefnfn', payload)
            return state;
        },
    }
})

export const { increment, decrement, incrementByAmount, updateStatus } = stockSlice.actions
export const stockSelector = (state) => state.stock;
export default stockSlice.reducer
