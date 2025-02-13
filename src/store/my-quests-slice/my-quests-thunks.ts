import { Reservation } from '../../types';
import { ThunkApiConfig } from '../types';
import { APIRoute, SliceName } from '../consts';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchMyQuests = createAsyncThunk<Reservation[], undefined, ThunkApiConfig>(
  `${SliceName.MyQuests}/fetch`,
  async (_arg, { extra: api }) => {
    const response = await api.get<Reservation[]>(APIRoute.Reservation);
    return response.data;
  }
);

export const deleteMyQuest = createAsyncThunk<{id: string}, {id: string}, ThunkApiConfig>(
  `${SliceName.MyQuests}/delete`,
  async ({id}, { extra: api }) => {
    await api.delete(`${APIRoute.Reservation}/${id}`);
    return {id};
  }
);
