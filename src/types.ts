import { AppRoute, NavigationSetting, AuthorizationStatus } from './consts';

type Page = keyof typeof AppRoute;

type Navigation = keyof typeof NavigationSetting;

type Authorization = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

export type { Page, Navigation, Authorization };
