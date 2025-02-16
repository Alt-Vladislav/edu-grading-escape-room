import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';

const getAppState = (state: State) => state[SliceName.App];
const getQuestsState = (state: State) => state[SliceName.Quests].quests;

const selectQuests = createSelector(
  [getQuestsState, getAppState],
  (quests, { genreFilter, difficultyFilter }) =>
    quests.data
      .filter((quest) => (quest.type === genreFilter || genreFilter === 'all'))
      .filter((quest) => (quest.level === difficultyFilter || difficultyFilter === 'all')
      )
);

const selectQuestsLoadingStatus = createSelector(
  getQuestsState,
  (quests) => quests.status
);

export { selectQuests, selectQuestsLoadingStatus };
