
import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
    name: 'cities',

    initialState: {
        cities: [],
        origenToInterValView:undefined,
        originToDestinyValView:[],
        interToDestinyValView:[],
        infoView:[]
    },

    reducers: {
        cityDataPush: (state, { payload }) => {
            state.cities = payload;
            console.log('state.cities :>> ', state.cities);
        },

        origenToInterValView: (state, { payload }) => {
            state.origenToInterValView = payload;
        },

        originToDestinyValView: (state, { payload }) => {
            state.originToDestinyValView = payload;
        },

        interToDestinyValView: (state, { payload }) => {
            state.interToDestinyValView = payload;
        },
        infoView:(state, {payload}) => {
            state.infoView = payload
        }
    }
});



export const { cityDataPush, origenToInterValView, 
    originToDestinyValView, interToDestinyValView, infoView } = citiesSlice.actions;





