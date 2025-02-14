type PictureProps = {
  imgWebp: string;
  imgJpg: string;
  width: number;
  height: number;
  title?: string;
}


export default function Picture({ imgWebp, imgJpg, width, height, title = '' }: PictureProps): JSX.Element {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${imgWebp}, ${imgWebp.replace('.webp', '@2x.webp')} 2x`}
      />
      <img
        src={imgJpg}
        srcSet={imgJpg.replace('.jpg', '@2x.jpg')}
        width={width}
        height={height}
        alt={title}
      />
    </picture>
  );
}
