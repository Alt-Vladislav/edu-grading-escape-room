import { AppRoute } from '../../consts';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAuthorizationStatus, selectUserLoadingStatus } from '../../store/user-slice/user-selectors';
import { selectRedirectPath } from '../../store/app-slice/app-selectors';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { login } from '../../store/user-slice/user-thunks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../../components/login-input/login-input';
import ButtonAccent from '../../components/button-accent/button-accent';


export default function LoginPage(): JSX.Element {
  const isAuthorized = useAppSelector(selectAuthorizationStatus) === 'AUTH';
  const isLoading = useAppSelector(selectUserLoadingStatus) === 'Loading';
  const redirectPath = useAppSelector(selectRedirectPath);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate(AppRoute.Main.Path);
    }
  }, [isAuthorized, navigate]);

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null && checkboxRef.current !== null) {
      if (checkboxRef.current.checked) {
        dispatch(login({
          email: emailRef.current.value,
          password: passwordRef.current.value
        }))
          .then(({ meta }) => {
            if (meta.requestStatus === 'rejected') {
              toast.error('Ошибка авторизации. Попробуйте ещё раз');
            } else {
              navigate(redirectPath || AppRoute.Main.Path);
            }
          });
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
              <LoginInput type='Email' reference={emailRef} isDisabled={isLoading} />
              <LoginInput type='Password' reference={passwordRef} isDisabled={isLoading} />
            </div>
            <ButtonAccent buttonType='Login' isDisabled={isLoading} />
          </div>

          <label className="custom-checkbox login-form__checkbox">
            <input
              type="checkbox"
              id="id-order-agreement"
              name="user-agreement"
              required
              ref={checkboxRef}
              disabled={isLoading}
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
