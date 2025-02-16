import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { deleteMyQuest } from '../../store/my-quests-slice/my-quests-thunks';

type ButtonAccentProps = {
  buttonType: keyof typeof ButtonSetting;
  reservationId?: string | null;
  isDisabled?: boolean;
}

const ButtonSetting = {
  Login: {
    Class: 'btn--general login-form__submit',
    Type: 'submit',
    Title: 'Войти'
  },
  MyQuests: {
    Class: 'btn--secondary quest-card__btn',
    Type: 'button',
    Title: 'Отменить'
  },
  Booking: {
    Class: 'btn--cta booking-form__submit',
    Type: 'submit',
    Title: 'Забронировать'
  }
} as const;

export default function ButtonAccent({ buttonType, reservationId = null, isDisabled = false }: ButtonAccentProps): JSX.Element {
  const setting = ButtonSetting[buttonType];
  const dispatch = useAppDispatch();
  const handleButtonClick = reservationId && {
    onClick: () => dispatch(deleteMyQuest({id: reservationId}))
  };

  return (
    <button
      className={`btn btn--accent ${setting.Class}`}
      type={setting.Type}
      disabled={isDisabled}
      {...handleButtonClick}
    >
      {setting.Title}
    </button>
  );
}
