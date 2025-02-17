import { useEffect } from 'react';
import { BookingData } from '../../../store/types';
import { UseFormRegister } from 'react-hook-form';
import { toast } from 'react-toastify';
import { capitalizeFirstLetter } from '../../../utils';

type Type = keyof typeof InputSettings;

type InputBoxProps = {
  name: keyof BookingData;
  type: Lowercase<Type>;
  pattern: RegExp;
  isError: boolean;
  errorText: string;
  register: UseFormRegister<BookingData>;
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


export default function InputBox({ name, type, pattern, isError, errorText, register }: InputBoxProps): JSX.Element {
  const setting = InputSettings[capitalizeFirstLetter(type) as Type];

  useEffect(() => {
    if (isError) {
      toast.error(setting.Title + errorText);
    }
  }, [isError, setting, errorText]);

  return (
    <div className="custom-input booking-form__input">
      <label
        className="custom-input__label"
        htmlFor={setting.Id}
        {...isError && ({ style: { color: 'rgba(247, 44, 44, 0.67)' } })}
      >
        {setting.Title}{isError && errorText}
      </label>
      <input
        type={type}
        id={setting.Id}
        placeholder={setting.Placeholder}
        {...register(name, { required: true, pattern: pattern })}
        {...isError && ({ style: { backgroundColor: 'rgba(247, 44, 44, 0.4)' } })}
      />
    </div>
  );
}
