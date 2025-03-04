import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';

const getUserState = (state: State) => state[SliceName.User];

const selectAuthorizationStatus = createSelector(
  getUserState,
  (user) => user.authorizationStatus
);

const selectUserLoadingStatus = createSelector(
  getUserState,
  (user) => user.user.status
);

export { selectAuthorizationStatus, selectUserLoadingStatus };
