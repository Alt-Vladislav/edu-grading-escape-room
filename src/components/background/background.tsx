import { Page } from '../../types';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectQuest } from '../../store/quest-slice/quest-selectors';
import { useMemo } from 'react';
import Picture from '../picture/picture';


type BackgroundProps = {
  currentPage: Page;
};

const DEFAULT_IMAGE_PATH = '/img/content/maniac/maniac-size-m';
const ImageSize = {
  Width: 1366,
  Height: {
    Default: 768,
    Big: 1959
  }
} as const;


export default function Background({ currentPage }: BackgroundProps): JSX.Element | null {
  const { data: quest, status: isQuestLoading } = useAppSelector(selectQuest);
  const isQuestImageLoaded = currentPage === 'Quest' && quest && isQuestLoading === 'Loaded';
  const imagePath = useMemo(() => {
    switch (currentPage) {
      case 'Main':
        return '';
      case 'Login':
        return DEFAULT_IMAGE_PATH;
      case 'Quest':
        return '';
      default:
        return DEFAULT_IMAGE_PATH.replace('c-', 'c-bg-');
    }
  }, [currentPage]);

  if (!imagePath && !isQuestImageLoaded) {
    return null;
  }

  return (
    <div className="decorated-page__decor" aria-hidden="true">
      <Picture
        imgWebp={isQuestImageLoaded ? quest.coverImgWebp : imagePath.concat('.webp')}
        imgJpg={isQuestImageLoaded ? quest.coverImg : imagePath.concat('.jpg')}
        width={ImageSize.Width}
        height={(currentPage === 'Login' || currentPage === 'Quest') ? ImageSize.Height.Default : ImageSize.Height.Big}
      />
    </div>
  );
}
