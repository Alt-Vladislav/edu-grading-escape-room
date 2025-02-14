import { Page } from '../../types';

type BackgroundProps = {
  currentPage: Page;
};

const DEFAULT_IMAGE_PATH = 'img/content/maniac/maniac-size-m';
const ImageSize = {
  Default: 768,
  Big: 1959
} as const;

export default function Background({ currentPage }: BackgroundProps): JSX.Element {
  const isBlurred = currentPage !== 'Quest' && currentPage !== 'Login';
  const imagePath = isBlurred ? DEFAULT_IMAGE_PATH.replace('c-', 'c-bg-') : DEFAULT_IMAGE_PATH;
  //TODO Нужно будет что то думать при получении картинок сервера (страница Quest)

  return (
    <div className="decorated-page__decor" aria-hidden="true">
      <picture>
        <source
          type="image/webp"
          srcSet={`${imagePath}.webp, ${imagePath}@2x.webp 2x`}
        />
        <img
          src={`${imagePath}.jpg`}
          srcSet={`${imagePath}@2x.jpg 2x`}
          width={1366}
          height={isBlurred ? ImageSize.Big : ImageSize.Default}
          alt=""
        />
      </picture>
    </div>
  );
}
