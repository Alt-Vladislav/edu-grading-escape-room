import { Genre, Difficulty } from '../../types';
import { QuestGenre, DifficultyLevel } from '../../consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectGenreFilter, selectDifficultyFilter } from '../../store/app-slice/app-selectors';
import FilterItem from './filter-item/filter-item';

type FilterProps = {
  filterType: keyof typeof FilterSetting;
}

const FilterSetting = {
  Genre: {
    Title: 'Тематика',
    ListName: 'type',
    Items: QuestGenre
  },
  Difficulty: {
    Title: 'Тематика',
    ListName: 'level',
    Items: DifficultyLevel
  }
};


export default function Filter({ filterType }: FilterProps): JSX.Element {
  const setting = FilterSetting[filterType];
  const currentFilter = useAppSelector(filterType === 'Genre' ? selectGenreFilter : selectDifficultyFilter);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{setting.Title}</legend>
      <ul className="filter__list">
        {Object.entries(setting.Items).map(([filterName, configuration]) => {
          const config = configuration as (typeof setting.Items)[keyof typeof setting.Items];

          return (
            <FilterItem
              key={filterName}
              itemType={filterType}
              name={filterName.toLowerCase() as Genre | Difficulty}
              listName={setting.ListName}
              isDefaultChecked={currentFilter === filterName.toLowerCase()}
              idName={config.Name}
              title={config.Title}
              icon={'Icon' in config ? config.Icon : undefined}
            />
          );
        })}
      </ul>
    </fieldset>
  );
}
