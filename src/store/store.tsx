
import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './slices/usersSlice';
import { alertSlice } from './slices/alertSlice';


export const store = configureStore({

    reducer: {
        usersSlice: usersSlice.reducer,
        alertSlice: alertSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })

})
