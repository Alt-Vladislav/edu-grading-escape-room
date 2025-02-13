import { GENRES, DIFFICULTY_LEVELS, AppRoute, NavigationSetting, AuthorizationStatus } from './consts';

type Genre = typeof GENRES[number];

type DifficultyLevel = typeof DIFFICULTY_LEVELS[number];

type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: DifficultyLevel;
  type: Genre;
  peopleMinMax: [number, number];
}

type Page = keyof typeof AppRoute;

type Navigation = keyof typeof NavigationSetting;

type Authorization = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

export type { Genre, DifficultyLevel, Quest, Page, Navigation, Authorization };
