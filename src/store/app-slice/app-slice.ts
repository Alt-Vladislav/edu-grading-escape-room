import { AppState } from '../types';
import { Genre, DifficultyLevel } from '../../types';
import { GENRES, DIFFICULTY_LEVELS } from '../../consts';
import { SliceName } from '../consts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Pick<AppState, 'genreFilter' | 'difficultyFilter'> = {
  genreFilter: GENRES[0],
  difficultyFilter: DIFFICULTY_LEVELS[0],
};


export const appSlice = createSlice({
  name: SliceName.App,
  initialState: initialState,
  reducers: {
    changeGenreFilter(state, action: PayloadAction<{filter: Genre}>) {
      state.genreFilter = action.payload.filter;
    },
    changeDifficultyFilter(state, action: PayloadAction<{filter: DifficultyLevel}>) {
      state.difficultyFilter = action.payload.filter;
    }
  }
});

export const { changeGenreFilter, changeDifficultyFilter } = appSlice.actions;
