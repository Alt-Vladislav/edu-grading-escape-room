import { GENRES, DIFFICULTY_LEVELS, AppRoute, NavigationSetting, AuthorizationStatus } from './consts';

type Genre = typeof GENRES[number];

type DifficultyLevel = typeof DIFFICULTY_LEVELS[number];

type Slot = {
  time: string;
  isAvailable: boolean;
};

type Location = {
  address: string;
  coords: [number, number];
};

type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: DifficultyLevel;
  type: Genre;
  peopleMinMax: [number, number];
}

type FullQuest = Quest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

type BookingOption = {
  id: string;
  location: Location;
  slots: {
    today: Slot[];
    tomorrow: Slot[];
  };
}

type Reservation = {
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
}

type User = {
  email: string;
  token: string;
}

type Page = keyof typeof AppRoute;

type Navigation = keyof typeof NavigationSetting;

type Authorization = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

export type { Genre, DifficultyLevel, Quest, FullQuest, BookingOption, Reservation, User, Page, Navigation, Authorization };
