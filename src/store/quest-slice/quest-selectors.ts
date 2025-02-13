import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';

const getQuestState = (state: State) => state[SliceName.Quest];

const selectQuest = createSelector(
  getQuestState,
  (questState) => questState.quest
);

const selectQuestBooking = createSelector(
  getQuestState,
  (questState) => questState.bookingOptions
);

const selectBookingLoadingStatus = createSelector(
  getQuestState,
  (questState) => questState.isBooking
);

export { selectQuest, selectQuestBooking, selectBookingLoadingStatus };
