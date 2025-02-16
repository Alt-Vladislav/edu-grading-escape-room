import { useAppSelector } from '../../hooks/use-app-selector';
import { selectMyQuests } from '../../store/my-quests-slice/my-quests-selectors';
import QuestList from '../../components/quest-list/quest-list';


export default function MyQuestsPage(): JSX.Element {
  const {data: myQuests, status: loadingStatus} = useAppSelector(selectMyQuests);

  return (
    <div className="container">
      <div className="page-content__title-wrapper">
        <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
      </div>

      <QuestList quests={myQuests} loadingStatus={loadingStatus} />
    </div>
  );
}
