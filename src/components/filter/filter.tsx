import { Genre, Difficulty } from '../../types';
import { QuestGenre, DifficultyLevel } from '../../consts';
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


export default function Filter({filterType}: FilterProps): JSX.Element {
  const setting = FilterSetting[filterType];

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{setting.Title}</legend>
      <ul className="filter__list">
        {Object.entries(setting.Items).map(([filterName, configuration], index) => {
          const config = configuration as (typeof setting.Items)[keyof typeof setting.Items];

          return (
            <FilterItem
              key={ filterName }
              itemType={ filterType }
              name={ filterName.toLowerCase() as Genre | Difficulty }
              listName={ setting.ListName }
              isDefaultChecked={ index === 0 }
              idName={ config.Name }
              title={ config.Title }
              icon={'Icon' in config ? config.Icon : undefined}
            />
          );
        })}
      </ul>
    </fieldset>
  );
}
