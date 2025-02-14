import { useRef } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { login } from '../../store/user-slice/user-thunks';
import LoginInput from '../../components/login-input/login-input';
import ButtonAccent from '../../components/button-accent/button-accent';


export default function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null && checkboxRef.current !== null) {
      if (checkboxRef.current.checked) {
        dispatch(login({
          email: emailRef.current.value,
          password: passwordRef.current.value
        }));
      }
    }
  };

  return (
    <div className="container container--size-l">
      <div className="login__form">
        <form className="login-form" action="#" method="post" onSubmit={handleFormSubmit}>

          <div className="login-form__inner-wrapper">
            <h1 className="title title--size-s login-form__title">Вход</h1>

            <div className="login-form__inputs">
              <LoginInput type='Email' reference={emailRef} />
              <LoginInput type='Password' reference={passwordRef} />
            </div>

            <ButtonAccent buttonType='Login' />
          </div>

          <label className="custom-checkbox login-form__checkbox">
            <input
              type="checkbox"
              id="id-order-agreement"
              name="user-agreement"
              required
              ref={checkboxRef}
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
      </div>
    </div>
  );
}
