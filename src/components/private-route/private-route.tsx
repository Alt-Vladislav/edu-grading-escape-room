import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../../store/user-slice/user-selectors';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setRedirectPath } from '../../store/app-slice/app-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { PropsWithChildren, useEffect } from 'react';

type PrivateRouteProps = PropsWithChildren;


export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const currentPagePath = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (authorizationStatus === 'NO_AUTH') {
      dispatch(setRedirectPath({ redirectPath: currentPagePath }));
      navigate(AppRoute.Login.Path);
    }
  }, [authorizationStatus, currentPagePath, dispatch, navigate]);

  if (authorizationStatus === 'NO_AUTH' || authorizationStatus === 'UNKNOWN') {
    return null;
  }

  return children;
}
