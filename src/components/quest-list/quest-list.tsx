import { Quest, Reservation } from '../../types';
import { LoadingStatus } from '../../store/types';
import Spinner from '../../spinner/spinner';
import QuestItem from './quest-item/quest-item';

type QuestListProps = {
  quests: Quest[] | Reservation[];
  loadingStatus: LoadingStatus;
}


export default function QuestList({ quests, loadingStatus }: QuestListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {loadingStatus === 'Loading'
        ? <Spinner />
        : (
          quests.map((quest) => {
            const questData = 'quest' in quest ? quest.quest : quest;
            const reservationData = 'quest' in quest ? quest : null;

            return (
              <QuestItem
                key={quest.id}
                quest={questData}
                reservation={reservationData}
              />
            );
          })
        )}
    </div>
  );
}
