
import { createSlice } from '@reduxjs/toolkit';

export const citysSlice = createSlice({
    name: 'citys',

    initialState: {
        citys: [],
        origenToInterValView:[],
        originToDestinyValView:[],
        interToDestinyValView:[],
        infoView:[]
    },

    reducers: {
        citysDataPush: (state, { payload }) => {
            state.citys = payload;
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



export const { citysDataPush, origenToInterValView, 
    originToDestinyValView, interToDestinyValView, infoView } = citysSlice.actions;





