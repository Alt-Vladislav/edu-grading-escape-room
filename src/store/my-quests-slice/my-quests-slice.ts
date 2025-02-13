import { AppState } from '../types';
import { SliceName, LoadingStatus } from '../consts';
import { fetchMyQuests, deleteMyQuest } from './my-quests-thunks';
import { postQuestBooking } from '../quest-slice/quest-thunks';
import { logout } from '../user-slice/user-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'myQuests'> = {
  myQuests: {data: [], status: LoadingStatus.Unknown},
};


export const myQuestsSlice = createSlice({
  name: SliceName.MyQuests,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMyQuests.pending, (state) => {
        state.myQuests.status = LoadingStatus.Loading;
      })
      .addCase(fetchMyQuests.fulfilled, (state, action) => {
        state.myQuests.data = action.payload;
        state.myQuests.status = LoadingStatus.Loaded;
      })
      .addCase(fetchMyQuests.rejected, (state) => {
        state.myQuests.data = [];
        state.myQuests.status = LoadingStatus.Error;
      })
      .addCase(deleteMyQuest.fulfilled, (state, action) => {
        state.myQuests.data = state.myQuests.data.filter((myQuest) => myQuest.id !== action.payload.id);
      })
      .addCase(postQuestBooking.fulfilled, (state, action) => {
        state.myQuests.data = state.myQuests.data.concat(action.payload);
      })
      .addCase(logout.fulfilled, (state) => {
        state.myQuests = initialSLiceState.myQuests;
      });
  }
});
