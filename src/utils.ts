import { AppRoute, DifficultyLevel } from './consts';
import { Quest, Page } from './types';


const getPageName = (path: string): Page => {
  const processedPath = path.replace(/\/quest\/[^/]+/, '/quest/:id');

  for (const key in AppRoute) {
    if (AppRoute[key as Page].Path === processedPath) {
      return key as Page;
    }
  }
  return 'Main';
};


const findDifficultyTitle = (level: Quest['level']) => {
  const difficultyLevel = Object.entries(DifficultyLevel).find((item) => item[0].toLowerCase() === level);

  return difficultyLevel ? difficultyLevel[1].Title : '';
};


export { getPageName, findDifficultyTitle };
