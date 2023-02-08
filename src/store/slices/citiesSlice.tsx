
import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
    name: 'cities',

    initialState: {
        citiesState: [],
        intersState:[{}],
        originToDestinyValState:undefined,
        dateAndPassengersState:undefined,
        infoViewState:[],
    },

    reducers: {
        cityDataPush: (state, { payload }) => {
            state.citiesState = payload;
        },
        intersDataPush: (state, { payload }) => {
            state.intersState = payload;
        },
        originToDestinyValView: (state, { payload }) => {
            state.originToDestinyValState = payload;
        },
        dateAndPassengersView: (state, { payload }) => {
            state.dateAndPassengersState = payload;  
        },
        infoView:(state, {payload}) => {
            state.infoViewState = payload
        }
    }
});



export const { cityDataPush, intersDataPush, originToDestinyValView, 
    infoView, dateAndPassengersView } = citiesSlice.actions;





