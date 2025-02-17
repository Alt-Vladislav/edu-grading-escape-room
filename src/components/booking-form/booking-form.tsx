import { AppRoute } from '../../consts';
import { Quest, BookingOption } from '../../types';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { postQuestBooking } from '../../store/quest-slice/quest-thunks';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DateSlots from './date-slots/date-slots';
import InputBox from './input-box/input-box';
import ButtonAccent from '../../components/button-accent/button-accent';

type BookingFormProps = {
  questId: string;
  bookingOption: BookingOption;
  peopleMinMax: Quest['peopleMinMax'];
  isBookingLoading: boolean;
}

const DEFAULT_DATE = { date: '', day: '', time: '' };


export default function BookingForm({ questId, bookingOption, peopleMinMax, isBookingLoading }: BookingFormProps): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(DEFAULT_DATE);
  const personRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const peopleCountRef = useRef<HTMLInputElement>(null);
  const withChildrenRef = useRef<HTMLInputElement>(null);
  const agreementRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedDate(DEFAULT_DATE);
  }, [bookingOption]);

  const handleDateChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedDate({
        date: evt.target.value,
        day: evt.target.dataset.day as string,
        time: evt.target.dataset.time as string
      });
    }, []);

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    if (selectedDate.day && personRef.current !== null && phoneRef.current !== null && peopleCountRef.current !== null && withChildrenRef.current !== null && agreementRef.current !== null) {
      if (agreementRef.current.checked) {
        if ((Number(peopleCountRef.current.value) < peopleMinMax[0]) || (Number(peopleCountRef.current.value) > peopleMinMax[1])) {
          toast.error('Укажите подходящее количество участников');
        } else {
          dispatch(postQuestBooking({
            id: questId,
            data: {
              date: selectedDate.day as 'today' | 'tomorrow',
              time: selectedDate.time,
              contactPerson: personRef.current.value,
              phone: phoneRef.current.value,
              withChildren: withChildrenRef.current.checked,
              peopleCount: Number(peopleCountRef.current.value),
              placeId: bookingOption.id
            }
          }))
            .then(({ meta }) => {
              if (meta.requestStatus === 'rejected') {
                toast.error('Ошибка бронирования, попробуйте позже');
              } else {
                navigate(AppRoute.MyQuests.Path);
              }
            });
        }
      }
    }
  };


  return (
    <form className="booking-form" action="#" method="post" onSubmit={handleFormSubmit}>

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        {
          Object.entries(bookingOption.slots).map(([type, slots]) => (
            <DateSlots
              key={type}
              type={type as 'today' | 'tomorrow'}
              slots={slots}
              selectedDate={selectedDate.date}
              onChange={handleDateChange}
            />
          ))
        }
      </fieldset>

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <InputBox type='text' pattern={'^[А-Яа-яЁёA-Za-z]{1,}'} reference={personRef} />
        <InputBox type='tel' pattern={'^[0-9]{11,}'} reference={phoneRef} />
        <InputBox type='number' pattern={`^[${peopleMinMax[0]}-${peopleMinMax[1]}]$`} reference={peopleCountRef} />

        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            name="children"
            defaultChecked
            ref={withChildrenRef}
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
            Со&nbsp;мной будут дети
          </span>
        </label>
      </fieldset>

      <ButtonAccent buttonType='Booking' isDisabled={isBookingLoading} />

      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          type="checkbox"
          id="id-order-agreement"
          name="user-agreement"
          required
          ref={agreementRef}
        />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">
          Я&nbsp;согласен с <span className="link link--active-silver link--underlined">правилами обработки персональных данных</span>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}
