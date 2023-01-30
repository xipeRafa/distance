
import { configureStore } from '@reduxjs/toolkit';
import { citiesSlice } from './slices/citiesSlice';
import { alertSlice } from './slices/alertSlice';


export const store = configureStore({

    reducer: {
        citiesSlice: citiesSlice.reducer,
        alertSlice: alertSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })

})
