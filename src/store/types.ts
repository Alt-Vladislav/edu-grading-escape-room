import { Genre, Difficulty, Quest, FullQuest, BookingOption, Reservation, User, Authorization } from '../types';
import { LoadingStatus } from './consts';
import { AxiosInstance } from 'axios';
import { AppDispatch } from '../hooks/use-app-dispatch';
import { State } from '../hooks/use-app-selector';


type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

type LoadedData<T> = {
  data: T;
  status: typeof LoadingStatus[keyof typeof LoadingStatus];
}

type AppState = {
  genreFilter: Genre;
  difficultyFilter: Difficulty;
  authorizationStatus: Authorization;
  user: LoadedData<User | undefined>;
  quests: LoadedData<Quest[]>;
  quest: LoadedData<FullQuest | undefined>;
  bookingOptions: LoadedData<BookingOption[]>;
  myQuests: LoadedData<Reservation[]>;
  isBooking: boolean;
}

type BookingData = Omit<Reservation, 'id' | 'location' | 'quest'> & {
  placeId: string;
};

type LoginData = {
  email: string;
  password: string;
};

export type { ThunkApiConfig, LoadedData, AppState, BookingData, LoginData };
