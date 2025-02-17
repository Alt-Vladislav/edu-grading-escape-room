import { NavigationSetting } from '../../../consts';
import { Page, Navigation } from '../../../types';
import NavigationItem from '../navigation-item/navigation-item';
import { useState, memo, useEffect } from 'react';

type NavigationProps = {
  isAuthorized: boolean;
  currentPage: Page;
}


function BaseNavigationList({ isAuthorized, currentPage }: NavigationProps): JSX.Element {
  const [activeNavigation, setActiveNavigation] = useState<Navigation>('Main');

  useEffect(() => {
    if (Object.keys(NavigationSetting).includes(currentPage) && (activeNavigation !== currentPage)) {
      setActiveNavigation(currentPage as Navigation);
    }
  }, [currentPage, activeNavigation]);

  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        {
          Object.entries(NavigationSetting).map(([pageName, settings]) => (
            <NavigationItem
              key={pageName}
              setting={settings}
              isEnable={!settings.IsCheckAuthorization || isAuthorized}
              isActive={activeNavigation === pageName}
              isDisabledLink={activeNavigation !== currentPage}
              onClick={setActiveNavigation}
            />
          ))
        }
      </ul>
    </nav>
  );
}

export const NavigationList = memo(BaseNavigationList);
