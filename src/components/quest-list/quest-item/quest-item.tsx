import { AppRoute } from '../../../consts';
import { Quest, Reservation } from '../../../types';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../picture/picture';
import Tags from '../../tags/tags';

type QuestItemProps = {
  quest: Quest;
  reservation: Reservation | null;
}

const ImageSize = {
  Width: 344,
  Height: 232
};


export default function QuestItem({ quest, reservation }: QuestItemProps): JSX.Element {
  const { id, title, previewImg, previewImgWebp, level, peopleMinMax } = quest;
  if (reservation) {
    const { date, time, contactPerson, phone, withChildren, peopleCount } = reservation;    //TODO: Доделать для страницы "Мои бронирования"
  }

  const currentLink = useMemo(() => ({
    path: AppRoute.Quest.Path.replace(':id', id),
    title: AppRoute.Quest.TitleLink
  }), [id]);

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <Picture
          imgWebp={previewImgWebp}
          imgJpg={previewImg}
          width={ImageSize.Width}
          height={ImageSize.Height}
          title={title}
        />
      </div>

      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={currentLink.path} title={currentLink.title.replace('@', title)} className="quest-card__link">
            {title}
          </Link>
        </div>

        <Tags type='card' peopleMinMax={peopleMinMax} level={level} />
      </div>
    </div>
  );
}
