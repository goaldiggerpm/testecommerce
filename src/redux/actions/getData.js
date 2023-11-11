import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk("stock/getData", async (thunkAPI) => {
    try {
        // const url = '../data.json';
        // const response = await axios.get('../data.json')
        // const { data } = response;

        const data = { msg: 'Hello World' }
        return data;

        // if (response.status === 200) {
        //     return data;
        // } else {
        //     return thunkAPI.rejectWithValue(data);
        // }

    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});

