import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { selectIsLoading, selectIsError } from 'redux/selectors';
// import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { Navigation } from './Navigation/Navigation';
import { refreshCurrentUser } from 'redux/auth/auth-operations';

import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Contacts } from '../pages/Contacts';

// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Home = lazy(() => import('../pages/Home'));
// const Contacts = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        {/* {isLoading && !error && <b>Request in progress...</b>}
        {error && <b>Sorry,{error}</b>} */}
      </Routes>
    </>
  );
}
