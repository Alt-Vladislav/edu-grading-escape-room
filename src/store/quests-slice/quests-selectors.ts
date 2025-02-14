import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';

const getQuestsState = (state: State) => state[SliceName.Quests].quests;

const selectQuests = createSelector(
  getQuestsState,
  (quests) => quests
);

export { selectQuests };
