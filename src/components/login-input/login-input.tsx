type LoginInputProps = {
  type: keyof typeof InputSetting;
  reference: React.RefObject<HTMLInputElement>;
}

const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,15}$/;

const InputSetting = {
  Email: {
    Name: 'email',
    Placeholder: 'Адрес электронной почты',
    LabelText: 'E – mail',
    ExtraSetting: {}
  },
  Password: {
    Name: 'password',
    Placeholder: 'Пароль',
    LabelText: 'Пароль',
    ExtraSetting: {
      pattern: PASSWORD_PATTERN.source,
      title: 'Минимум одна буква и цифра. Длина от 3 до 15 символов'
    }
  }
} as const;


export default function LoginInput({type, reference}: LoginInputProps): JSX.Element {
  const setting = InputSetting[type];

  return (
    <div className="custom-input login-form__input">
      <label className="custom-input__label" htmlFor={ setting.Name }>{setting.LabelText}</label>
      <input
        type={ setting.Name }
        id={ setting.Name }
        name={ setting.Name }
        placeholder={ setting.Placeholder }
        required
        ref={reference}
        {...setting.ExtraSetting}
      />
    </div>
  );
}
