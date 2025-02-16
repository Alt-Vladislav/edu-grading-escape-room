import { Quest } from '../../types';
import { findDifficultyTitle } from '../../utils';
import classNames from 'classnames';

type TagsProps = {
  type: 'card' | 'page';
  peopleMinMax: Quest['peopleMinMax'];
  peopleCount?: number | null;
  level: Quest['level'];
}


export default function Tags({ type, peopleMinMax, peopleCount, level }: TagsProps): JSX.Element {
  return (
    <ul className={classNames(`tags quest-${type}__tags`, { 'tags--size-l': type === 'page' })}>
      <li className="tags__item">
        <svg width={11} height={14} aria-hidden="true">
          <use xlinkHref="#icon-person" />
        </svg>
        {peopleCount ? peopleCount : `${peopleMinMax[0]}–${peopleMinMax[1]}`}&nbsp;чел
      </li>
      <li className="tags__item">
        <svg width={14} height={14} aria-hidden="true">
          <use xlinkHref="#icon-level" />
        </svg>
        {findDifficultyTitle(level)}
      </li>
    </ul>
  );
}
