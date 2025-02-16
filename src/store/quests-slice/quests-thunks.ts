import { Quest } from '../../types';
import { ThunkApiConfig } from '../types';
import { APIRoute, SliceName } from '../consts';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchQuests = createAsyncThunk<Quest[], undefined, ThunkApiConfig>(
  `${SliceName.Quests}/fetch`,
  async (_arg, { extra: api }) => {
    const response = await api.get<Quest[]>(APIRoute.Quest);

    return response.data;
  }
);
