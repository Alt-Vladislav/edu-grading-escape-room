import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { selectQuest, selectQuestBooking, selectBookingLoadingStatus } from '../../store/quest-slice/quest-selectors';
import { fetchFullQuest, fetchQuestBooking } from '../../store/quest-slice/quest-thunks';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../../components/spinner/spinner';
import ErrorPage from '../error-page/error-page';
import Map from '../../components/map/map';
import BookingForm from '../../components/booking-form/booking-form';


export default function BookingPage(): JSX.Element {
  const { data: quest } = useAppSelector(selectQuest);
  const { data: bookingOptions, status: loadingStatus } = useAppSelector(selectQuestBooking);
  const isBookingLoadingStatus = useAppSelector(selectBookingLoadingStatus);

  const [selectedBookingId, setSelectedBookingId] = useState<string>('');
  const questId = useParams().id;
  const dispatch = useAppDispatch();
  const selectedBookingOption = bookingOptions.find((booking) => booking.id === selectedBookingId);

  useEffect(() => {
    if (questId && (quest === null || questId !== quest.id)) {
      dispatch(fetchFullQuest({ id: questId }));
      dispatch(fetchQuestBooking({ id: questId }));
    }
  }, [questId, quest, dispatch]);

  useEffect(() => {
    if (loadingStatus === 'Loaded') {
      setSelectedBookingId(bookingOptions[0].id);
    }
  }, [loadingStatus, bookingOptions]);


  if (loadingStatus === 'Loading') {
    return <Spinner />;
  }
  if (questId === undefined || quest === null || loadingStatus === 'Error') {
    return <ErrorPage />;
  }

  return (
    <div className="container container--size-s">
      <div className="page-content__title-wrapper">
        <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста</h1>
        <p className="title title--size-m title--uppercase page-content__title">{quest?.title}</p>
      </div>

      <div className="page-content__item">
        <Map selectedBookingOption={selectedBookingOption} bookingOptions={bookingOptions} onCLick={setSelectedBookingId} />
      </div>

      {selectedBookingOption && <BookingForm bookingOption={selectedBookingOption} isBookingLoading={isBookingLoadingStatus} />}
    </div>
  );
}
