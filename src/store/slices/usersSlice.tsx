
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',

    initialState: {
        users: []
    },

    reducers: {
        usersDataPush: (state, { payload }) => {
            state.users = payload;
        }
    }
});



export const { usersDataPush } = usersSlice.actions;