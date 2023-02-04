
import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
    name: 'cities',

    initialState: {
        cities: [],
        originToDestinyValView:undefined,
        dateAndPassengersView:undefined,
        infoView:[],
    },

    reducers: {
        cityDataPush: (state, { payload }) => {
            state.cities = payload;
        },
        originToDestinyValView: (state, { payload }) => {
            state.originToDestinyValView = payload;
        },
        dateAndPassengersView: (state, { payload }) => {
            state.dateAndPassengersView = payload;  
        },
        infoView:(state, {payload}) => {
            state.infoView = payload
        }
    }
});



export const { cityDataPush, originToDestinyValView, 
    infoView, dateAndPassengersView } = citiesSlice.actions;





