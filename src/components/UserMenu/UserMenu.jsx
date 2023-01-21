import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { selectEmail } from 'redux/auth/auth-selector';
import { logOut } from 'redux/auth/auth-operations';

export function UserMenu() {
  const dispatch = useDispatch();

  const email = useSelector(selectEmail);
  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
    // <div className={css.wrapper}>
    //   <p className={css.username}>Welcome, {user.name}</p>
    //   <button type="button" onClick={() => dispatch(logOut())}>
    //     Logout
    //   </button>
    // </div>
  );
}
