import { AppRoute } from './consts';
import { Page } from './types';

const getPageName = (path: string) => {
  const processedPath = path.replace(/\/quest\/[^/]+/, '/quest/:id');

  for (const key in AppRoute) {
    if (AppRoute[key as Page].Path === processedPath) {
      return key as Page;
    }
  }
  return 'Main';
};

export { getPageName };
