import { AppRoute } from '../../consts';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { getPageName } from '../../utils';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectQuest } from '../../store/quest-slice/quest-selectors';
import classNames from 'classnames';
import Header from '../../components/header/header';
import Background from '../../components/background/background';
import Footer from '../../components/footer/footer';


export default function Layout(): JSX.Element {
  const currentPagePath = useLocation().pathname;
  const currentPageName = getPageName(currentPagePath);
  const {data: currentQuest} = useAppSelector(selectQuest);
  const title = AppRoute[currentPageName].Title;
  return (
    <div className="wrapper">
      <Helmet>
        <title>{currentPageName === 'Quest' ? title.replace('@', currentQuest?.title || '') : title}</title>
      </Helmet>

      <Header currentPage={currentPageName} />
      <main className={classNames({
        'page-content': currentPageName !== 'Quest' && currentPageName !== 'Login',
        'decorated-page': currentPageName !== 'Main',
        'quest-page': currentPageName === 'Quest',
        'login': currentPageName === 'Login',
      })}
      >

        <Background currentPage={currentPageName} />
        <Outlet />

      </main>
      <Footer />
    </div>
  );
}
