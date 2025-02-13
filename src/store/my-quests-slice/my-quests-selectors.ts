import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';

const getMyQuestsState = (state: State) => state[SliceName.MyQuests];

const selectFavorites = createSelector(
  getMyQuestsState,
  (myQuests) => myQuests.myQuests
);

export { selectFavorites };
