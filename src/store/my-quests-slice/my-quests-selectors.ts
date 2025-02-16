import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';

const getMyQuestsState = (state: State) => state[SliceName.MyQuests];

const selectMyQuests = createSelector(
  getMyQuestsState,
  (myQuests) => myQuests.myQuests
);

export { selectMyQuests };
