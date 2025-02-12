import { AppRoute } from '../../consts';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import Background from '../../components/background/background';
import Footer from '../../components/footer/footer';
import { getPageName } from '../../utils';


export default function Layout(): JSX.Element {
  const currentPagePath = useLocation().pathname;
  const currentPageName = getPageName(currentPagePath);

  return (
    <div className="wrapper">
      <Helmet>
        <title>{ AppRoute[currentPageName].Title }</title>
      </Helmet>

      <Header currentPage={ currentPageName } />

      <main className="page-content decorated-page">
        {currentPageName === 'Main' || <Background />}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
