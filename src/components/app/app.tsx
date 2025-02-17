import { AppRoute } from '../../consts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { checkAuthorization } from '../../store/user-slice/user-thunks';
import { fetchQuests } from '../../store/quests-slice/quests-thunks';
import { useEffect } from 'react';
import PrivateRoute from '../private-route/private-route';
import Layout from '../../pages/layout/layout';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import QuestPage from '../../pages/quest-page/quest-page';
import BookingPage from '../../pages/booking-page/booking-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import ErrorPage from '../../pages/error-page/error-page';


export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuests());
    dispatch(checkAuthorization());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main.Path} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.Contacts.Path} element={<ContactsPage />} />
            <Route path={AppRoute.Quest.Path} element={<QuestPage />} />
            <Route path={AppRoute.Login.Path} element={<LoginPage />} />
            <Route path={AppRoute.MyQuests.Path} element={<PrivateRoute><MyQuestsPage /></PrivateRoute>} />
            <Route path={AppRoute.Booking.Path} element={<PrivateRoute><BookingPage /></PrivateRoute>} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
