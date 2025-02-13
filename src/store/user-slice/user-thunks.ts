import { User } from '../../types';
import { ThunkApiConfig, LoginData } from '../types';
import { APIRoute, SliceName } from '../consts';
import { saveToken, dropToken } from '../../services/token';
import { fetchMyQuests } from '../my-quests-slice/my-quests-thunks';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const checkAuthorization = createAsyncThunk<User, undefined, ThunkApiConfig>(
  `${SliceName.User}/CheckAuthorizationStatus`,
  async (_arg, { dispatch, extra: api }) => {
    const response = await api.get<User>(APIRoute.Login);
    saveToken(response.data.token);
    dispatch(fetchMyQuests());
    return response.data;
  }
);

export const login = createAsyncThunk<User, LoginData, ThunkApiConfig>(
  `${SliceName.User}/login`,
  async ({email, password}, { dispatch, extra: api }) => {
    dropToken();
    const response = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(response.data.token);
    dispatch(fetchMyQuests());
    return response.data;
  }
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  `${SliceName.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Login);
    dropToken();
  }
);
