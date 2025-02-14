import { AppState } from '../types';
import { SliceName, LoadingStatus } from '../consts';
import { fetchQuests } from './quests-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'quests'> = {
  quests: { data: [], status: LoadingStatus.Unknown },
};


export const questsSlice = createSlice({
  name: SliceName.Quests,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.quests.status = LoadingStatus.Loading;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.quests.data = action.payload;
        state.quests.status = LoadingStatus.Loaded;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.quests.data = [];
        state.quests.status = LoadingStatus.Error;
      });
  },
});
