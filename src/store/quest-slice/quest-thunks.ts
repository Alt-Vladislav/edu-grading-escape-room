import { FullQuest, BookingOption, Reservation } from '../../types';
import { ThunkApiConfig, BookingData } from '../types';
import { APIRoute, SliceName } from '../consts';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchFullQuest = createAsyncThunk<FullQuest, { id: string }, ThunkApiConfig>(
  `${SliceName.Quest}/fetch`,
  async ({ id }, { extra: api }) => {
    const response = await api.get<FullQuest>(`${APIRoute.Quest}/${id}`);
    return response.data;
  }
);

export const fetchQuestBooking = createAsyncThunk<BookingOption[], { id: string }, ThunkApiConfig>(
  `${SliceName.Quest}/booking/fetch`,
  async ({ id }, { extra: api }) => {
    const response = await api.get<BookingOption[]>(`${APIRoute.Quest}/${id}/${APIRoute.Booking}`);
    return response.data;
  }
);

export const postQuestBooking = createAsyncThunk<Reservation, { id: string; data: BookingData }, ThunkApiConfig>(
  `${SliceName.Quest}/booking/post`,
  async ({ id, data }, { extra: api }) => {
    const response = await api.post<Reservation>(`${APIRoute.Quest}/${id}/${APIRoute.Booking}`, data);
    return response.data;
  }
);
