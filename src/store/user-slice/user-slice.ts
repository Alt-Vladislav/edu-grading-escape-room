import { AppState } from '../types';
import { AuthorizationStatus } from '../../consts';
import { SliceName, LoadingStatus } from '../consts';
import { checkAuthorization, login, logout } from './user-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialSLiceState: Pick<AppState, 'authorizationStatus' | 'user'> = {
  user: {data: null, status: LoadingStatus.Unknown},
  authorizationStatus: AuthorizationStatus.Unknown,
};


export const userSlice = createSlice({
  name: SliceName.User,
  initialState: initialSLiceState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthorization.fulfilled, (state, action) => {
        state.user.data = action.payload;
        state.user.status = LoadingStatus.Loaded;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorization.rejected, (state) => {
        state.user.data = initialSLiceState.user.data;
        state.user.status = LoadingStatus.Error;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.data = action.payload;
        state.user.status = LoadingStatus.Loaded;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.user.data = initialSLiceState.user.data;
        state.user.status = LoadingStatus.Error;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user.data = initialSLiceState.user.data;
        state.user.status = LoadingStatus.Unknown;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
