
import { configureStore } from '@reduxjs/toolkit';
import { citysSlice } from './slices/citysSlice';
import { alertSlice } from './slices/alertSlice';


export const store = configureStore({

    reducer: {
        citysSlice: citysSlice.reducer,
        alertSlice: alertSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })

})
