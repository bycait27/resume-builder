import { configureStore } from '@reduxjs/toolkit'
import stepperReducer from './features/stepper/stepperSlice'

export const store = configureStore({
    reducer: {
        stepper: stepperReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})