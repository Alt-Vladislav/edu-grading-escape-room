import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../../store/user-slice/user-selectors';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setRedirectPath } from '../../store/app-slice/app-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { PropsWithChildren, useEffect } from 'react';

type PrivateRouteProps = PropsWithChildren;


export default function PrivateRoute({ children }: PrivateRouteProps) {
  const isNotAuthorized = useAppSelector(selectAuthorizationStatus) !== 'AUTH';
  const currentPagePath = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (isNotAuthorized) {
      dispatch(setRedirectPath({ redirectPath: currentPagePath }));
      navigate(AppRoute.Login.Path);
    }
  }, [isNotAuthorized, currentPagePath, dispatch, navigate]);

  if (isNotAuthorized) {
    return null;
  }

  return children;
}
