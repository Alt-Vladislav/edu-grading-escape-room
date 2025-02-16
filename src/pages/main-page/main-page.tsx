import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectQuests, selectQuestsLoadingStatus } from '../../store/quests-slice/quests-selectors';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setRedirectPath } from '../../store/app-slice/app-slice';
import { useEffect } from 'react';
import Filter from '../../components/filter/filter';
import QuestList from '../../components/quest-list/quest-list';


export default function MainPage(): JSX.Element {
  const quests = useAppSelector(selectQuests);
  const loadingStatus = useAppSelector(selectQuestsLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setRedirectPath({ redirectPath: AppRoute.Main.Path }));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="page-content__title-wrapper">
        <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге</h1>
        <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
      </div>

      <div className="page-content__item">
        <form className="filter" action="#" method="get">
          <Filter filterType='Genre' />
          <Filter filterType='Difficulty' />
        </form>
      </div>

      <h2 className="title visually-hidden">Выберите квест</h2>
      <QuestList quests={quests} loadingStatus={loadingStatus} />
    </div>
  );
}
