import { AppState } from '../types';
import { SliceName, LoadingStatus } from '../consts';
import { fetchFullQuest, fetchQuestBooking, postQuestBooking } from './quest-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'quest' | 'bookingOptions' | 'isBooking'> = {
  quest: { data: null, status: LoadingStatus.Unknown },
  bookingOptions: { data: [], status: LoadingStatus.Unknown },
  isBooking: false
};


export const questSlice = createSlice({
  name: SliceName.Quest,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFullQuest.pending, (state) => {
        state.quest.status = LoadingStatus.Loading;
      })
      .addCase(fetchFullQuest.fulfilled, (state, action) => {
        state.quest.data = action.payload;
        state.quest.status = LoadingStatus.Loaded;
      })
      .addCase(fetchFullQuest.rejected, (state) => {
        state.quest.data = initialSLiceState.quest.data;
        state.quest.status = LoadingStatus.Error;
      })
      .addCase(fetchQuestBooking.pending, (state) => {
        state.bookingOptions.status = LoadingStatus.Loading;
      })
      .addCase(fetchQuestBooking.fulfilled, (state, action) => {
        state.bookingOptions.data = action.payload;
        state.bookingOptions.status = LoadingStatus.Loaded;
      })
      .addCase(fetchQuestBooking.rejected, (state) => {
        state.bookingOptions.data = [];
        state.bookingOptions.status = LoadingStatus.Error;
      })
      .addCase(postQuestBooking.pending, (state) => {
        state.isBooking = true;
      })
      .addCase(postQuestBooking.fulfilled, (state) => {
        state.isBooking = false;
      })
      .addCase(postQuestBooking.rejected, (state) => {
        state.isBooking = false;
      });
  }
});
