import { AppState } from '../types';
import { Genre, Difficulty } from '../../types';
import { SliceName } from '../consts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Pick<AppState, 'redirectPathAfterLogin' | 'genreFilter' | 'difficultyFilter'> = {
  redirectPathAfterLogin: '',
  genreFilter: 'all',
  difficultyFilter: 'all',
};


export const appSlice = createSlice({
  name: SliceName.App,
  initialState: initialState,
  reducers: {
    setRedirectPath(state, action: PayloadAction<{ redirectPath: string }>) {
      state.redirectPathAfterLogin = action.payload.redirectPath;
    },
    resetRedirectPath(state) {
      state.redirectPathAfterLogin = '';
    },
    changeGenreFilter(state, action: PayloadAction<{ filter: Genre }>) {
      state.genreFilter = action.payload.filter;
    },
    changeDifficultyFilter(state, action: PayloadAction<{ filter: Difficulty }>) {
      state.difficultyFilter = action.payload.filter;
    }
  }
});

export const { setRedirectPath, resetRedirectPath, changeGenreFilter, changeDifficultyFilter } = appSlice.actions;
