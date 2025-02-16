import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { selectQuest } from '../../store/quest-slice/quest-selectors';
import { fetchFullQuest, fetchQuestBooking } from '../../store/quest-slice/quest-thunks';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { findGenreTitle } from '../../utils';
import Spinner from '../../components/spinner/spinner';
import ErrorPage from '../error-page/error-page';
import Tags from '../../components/tags/tags';


export default function QuestPage(): JSX.Element {
  const { data: quest, status: loadingStatus } = useAppSelector(selectQuest);
  const questId = useParams().id;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questId && (quest === null || questId !== quest.id)) {
      dispatch(fetchFullQuest({ id: questId }));
      dispatch(fetchQuestBooking({ id: questId }));
    }
  }, [questId, quest, dispatch]);


  if (loadingStatus === 'Loading') {
    return <Spinner />;
  }
  if (questId === undefined || quest === null) {
    return <ErrorPage />;
  }

  const { id, title, level, type, peopleMinMax, description } = quest;

  return (
    <div className="container container--size-l">
      <div className="quest-page__content">
        <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
        <p className="subtitle quest-page__subtitle">
          <span className="visually-hidden">Жанр:</span>
          {findGenreTitle(type)}
        </p>

        <Tags type='page' peopleMinMax={peopleMinMax} level={level} />
        <p className="quest-page__description">{description}</p>

        <Link to={AppRoute.Booking.Path.replace(':id', id)} className="btn btn--accent btn--cta quest-page__btn">
          Забронировать
        </Link>

      </div>
    </div>
  );
}
