import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { compareAsc } from 'date-fns';
import type { RootState } from './app/store';


const initialState: string[] = []; // Store dates as strings

export const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    dateAdded: (state, action: PayloadAction<string[]>) => {
      return action.payload;
    }
  }
});

export const { dateAdded } = datesSlice.actions;
export const chosenDates = (state: RootState) => state.dates;
export default datesSlice.reducer;
