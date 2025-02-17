import { AppRoute } from '../../consts';
import { Quest, BookingOption } from '../../types';
import { BookingData } from '../../store/types';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { postQuestBooking } from '../../store/quest-slice/quest-thunks';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
const InputSetting = {
  ContactPerson: {
    Name: 'contactPerson',
    Type: 'text',
    Pattern: /^[А-Яа-яЁёA-Za-z]{1,}/,
    ErrorText: ': от 1 до 15 символов'
  },
  Phone: {
    Name: 'phone',
    Type: 'tel',
    Pattern: /^(?:\+7|8)\d{10}$/,
    ErrorText: ': номер формата +7 (000) 000-00-00 (Ру-формат)'
  },
  PeopleCount: {
    Name: 'peopleCount',
    Type: 'number',
    Pattern: null,
    ErrorText: ': не меньше @ и не больше #'
  }
} as const;


export default function BookingForm({ questId, bookingOption, peopleMinMax, isBookingLoading }: BookingFormProps): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(DEFAULT_DATE);
  const { register, handleSubmit, formState: { errors } } = useForm<BookingData>();
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

  const handleFormSubmit: SubmitHandler<BookingData> = (data) => {
    if (selectedDate.day && agreementRef.current !== null) {
      if (agreementRef.current.checked) {
        dispatch(postQuestBooking({
          id: questId,
          data: {
            date: selectedDate.day as 'today' | 'tomorrow',
            time: selectedDate.time,
            contactPerson: data.contactPerson,
            phone: data.phone,
            withChildren: data.withChildren,
            peopleCount: Number(data.peopleCount),
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
  };


  return (
    <form className="booking-form" action="#" method="post" onSubmit={handleSubmit(handleFormSubmit)}>

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
        <InputBox
          name={InputSetting.ContactPerson.Name}
          type={InputSetting.ContactPerson.Type}
          pattern={InputSetting.ContactPerson.Pattern}
          isError={!!errors.contactPerson}
          errorText={InputSetting.ContactPerson.ErrorText}
          register={register}
        />
        <InputBox
          name={InputSetting.Phone.Name}
          type={InputSetting.Phone.Type}
          pattern={InputSetting.Phone.Pattern}
          isError={!!errors.phone}
          errorText={InputSetting.Phone.ErrorText}
          register={register}
        />
        <InputBox
          name={InputSetting.PeopleCount.Name}
          type={InputSetting.PeopleCount.Type}
          pattern={new RegExp(`^[${peopleMinMax[0]}-${peopleMinMax[1]}]$`)}
          isError={!!errors.peopleCount}
          errorText={InputSetting.PeopleCount.ErrorText.replace('@', peopleMinMax[0].toString()).replace('#', peopleMinMax[1].toString())}
          register={register}
        />

        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            defaultChecked
            {...register('withChildren')}
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
