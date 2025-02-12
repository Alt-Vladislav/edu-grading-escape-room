import { SliceName } from './consts';
import { appSlice } from './app-slice/app-slice';
import { questsSlice } from './quests-slice/quests-slice';
import { questSlice } from './quest-slice/quest-slice';
import { myQuestsSlice } from './my-quests-slice/my-quests-slice';
import { userSlice } from './user-slice/user-slice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

const api = createAPI();

const combinedReducer = combineReducers({
  [SliceName.App]: appSlice.reducer,
  [SliceName.Quests]: questsSlice.reducer,
  [SliceName.Quest]: questSlice.reducer,
  [SliceName.MyQuests]: myQuestsSlice.reducer,
  [SliceName.User]: userSlice.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: api }
    }),
});
