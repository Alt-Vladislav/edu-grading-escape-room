type ButtonAccentProps = {
  buttonType: keyof typeof ButtonSetting;
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

export default function ButtonAccent({ buttonType, isDisabled = false }: ButtonAccentProps): JSX.Element {
  const setting = ButtonSetting[buttonType];
  return (
    <button className={`btn btn--accent ${setting.Class}`} type={setting.Type} disabled={isDisabled}>
      {setting.Title}
    </button>
  );
}
