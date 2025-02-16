import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';

const getAppState = (state: State) => state[SliceName.App];

const selectRedirectPath = createSelector(
  getAppState,
  (app) => app.redirectPathAfterLogin
);

const selectGenreFilter = createSelector(
  getAppState,
  (app) => app.genreFilter
);

const selectDifficultyFilter = createSelector(
  getAppState,
  (app) => app.difficultyFilter
);

export { selectRedirectPath, selectGenreFilter, selectDifficultyFilter };
