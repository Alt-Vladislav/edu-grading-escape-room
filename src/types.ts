import { AppRoute, AuthorizationStatus } from './consts';

type Page = keyof typeof AppRoute;

type Authorization = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

export type { Page, Authorization };
