import { Genre, Difficulty } from '../../../types';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { changeGenreFilter, changeDifficultyFilter } from '../../../store/app-slice/app-slice';

type FilterItemProps = {
  isDefaultChecked: boolean;
  itemType: 'Genre' | 'Difficulty';
  name: Genre | Difficulty;
  listName: string;
  idName: string;
  title: string;
  icon: { Link: string; Width: number } | undefined;
}


export default function FilterItem({ isDefaultChecked, itemType, name, listName, idName, title, icon }: FilterItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleFilterClick = () => {
    if (itemType === 'Genre') {
      dispatch(changeGenreFilter({ filter: name as Genre }));
      return;
    }
    dispatch(changeDifficultyFilter({ filter: name as Difficulty }));
  };

  return (
    <li className="filter__item" onClick={handleFilterClick}>
      <input type="radio" name={listName} id={idName} defaultChecked={isDefaultChecked} />
      <label className="filter__label" htmlFor={idName}>
        {
          icon && (
            <svg className="filter__icon" width={icon.Width} height={30} aria-hidden="true">
              <use xlinkHref={icon.Link} />
            </svg>
          )
        }
        <span className="filter__label-text">{title}</span>
      </label>
    </li>
  );
}
