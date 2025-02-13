import { NavigationSetting } from '../../../consts';
import { Navigation } from '../../../types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type NavigationItemProps = {
  setting: typeof NavigationSetting[Navigation];
  isEnable: boolean;
  isActive: boolean;
  isDisabledLink: boolean;
  onClick: React.Dispatch<React.SetStateAction<Navigation>>;
}


export default function NavigationItem({ setting, isEnable, isActive, isDisabledLink, onClick }: NavigationItemProps): JSX.Element | null {
  if (!isEnable) {
    return null;
  }

  const handleNavigationClick = () => {
    onClick(setting.Name);
  };

  return (
    <li className="main-nav__item">
      <Link
        to={setting.Link.Path}
        title={setting.Link.TitleLink}
        className={classNames('link', { 'active': isActive, 'not-disabled': isDisabledLink })}
        onClick={handleNavigationClick}
      >
        {setting.Title}
      </Link>
    </li>
  );
}
