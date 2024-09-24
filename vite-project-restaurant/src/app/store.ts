import { configureStore } from '@reduxjs/toolkit'
import { datesSlice } from '../datesSlice'

export const store = configureStore({
    reducer: {
      dates: datesSlice.reducer,
    },
  });

  export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>