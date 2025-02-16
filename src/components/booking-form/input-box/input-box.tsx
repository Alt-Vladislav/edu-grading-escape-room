import { capitalizeFirstLetter } from '../../../utils';

type Type = keyof typeof InputSettings;

type InputBoxProps = {
  type: Lowercase<Type>;
  pattern: string;
  reference: React.RefObject<HTMLInputElement>;
}

const InputSettings = {
  Text: {
    Id: 'name',
    Title: 'Ваше имя',
    Placeholder: 'Имя'
  },
  Tel: {
    Id: 'tel',
    Title: 'Контактный телефон',
    Placeholder: 'Телефон'
  },
  Number: {
    Id: 'person',
    Title: 'Количество участников',
    Placeholder: 'Количество участников'
  }
} as const;


export default function InputBox({ type, pattern, reference }: InputBoxProps): JSX.Element {
  const setting = InputSettings[capitalizeFirstLetter(type) as Type];

  return (
    <div className="custom-input booking-form__input">
      <label className="custom-input__label" htmlFor={setting.Id}>{setting.Title}</label>
      <input
        type={type}
        id={setting.Id}
        name={setting.Id}
        placeholder={setting.Placeholder}
        required
        pattern={pattern}
        ref={reference}
      />
    </div>
  );
}

