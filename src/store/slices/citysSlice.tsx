
import { createSlice } from '@reduxjs/toolkit';

export const citysSlice = createSlice({
    name: 'citys',

    initialState: {
        citys: []
    },

    reducers: {
        citysDataPush: (state, { payload }) => {
            console.log('payload:>>>>', payload)
            console.log('state.citys:>>>', state.citys)
            state.citys = payload;
        }
    }
});



export const { citysDataPush } = citysSlice.actions;