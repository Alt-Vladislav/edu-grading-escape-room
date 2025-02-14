type ButtonAccentProps = {
  buttonType: keyof typeof ButtonSetting;
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

export default function ButtonAccent({ buttonType }: ButtonAccentProps): JSX.Element {
  const setting = ButtonSetting[buttonType];
  return (
    <button className={`btn btn--accent ${setting.Class}`} type={setting.Type}>
      {setting.Title}
    </button>
  );
}
