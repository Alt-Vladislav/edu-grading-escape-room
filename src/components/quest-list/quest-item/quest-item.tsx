import { AppRoute } from '../../../consts';
import { Quest, Reservation } from '../../../types';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../picture/picture';
import Tags from '../../tags/tags';
import BookingInfo from '../booking-info/booking-info';
import ButtonAccent from '../../button-accent/button-accent';

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
  let bookingId = null;
  let bookingInfo = '';
  let bookingPeopleCount = null;
  if (reservation) {
    const { id: reservationId, date, time, location, peopleCount } = reservation;
    bookingId = reservationId;
    bookingInfo = `[${date === 'today' ? 'сегодня' : 'завтра'}, ${time}, ${location.address}]`;
    bookingPeopleCount = peopleCount;
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

          {reservation && <BookingInfo text={bookingInfo} />}
        </div>

        <Tags type='card' peopleMinMax={peopleMinMax} peopleCount={bookingPeopleCount} level={level} />
        {reservation && <ButtonAccent buttonType='MyQuests' reservationId={bookingId} />}
      </div>
    </div>
  );
}
