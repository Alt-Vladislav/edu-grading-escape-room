import { Quest, Reservation } from '../../types';
import { LoadingStatus } from '../../store/types';
import Spinner from '../spinner/spinner';
import ErrorPage from '../../pages/error-page/error-page';
import QuestItem from './quest-item/quest-item';

type QuestListProps = {
  quests: Quest[] | Reservation[];
  loadingStatus: LoadingStatus;
}


export default function QuestList({ quests, loadingStatus }: QuestListProps): JSX.Element {
  if (loadingStatus === 'Error') {
    return <ErrorPage isButtonHidden />;
  }
  if (loadingStatus === 'Loading') {
    return <Spinner />;
  }

  return (
    quests.length === 0
      ? (
        <>
          <h1 style={{ textAlign: 'center', display: 'inherit' }}>Ничего не нашлось</h1>
          <img src='/./img/travolta.gif' style={{ display: 'block', margin: '0 auto', width: '32%' }} />
        </>
      )
      : (
        <div className="cards-grid">
          {
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
          }
        </div>
      )
  );
}
