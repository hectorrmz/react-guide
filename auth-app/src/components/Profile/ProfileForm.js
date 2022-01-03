import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const passwordInput = useRef();
  const ctx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const password = passwordInput.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=', {
      method: 'POST',
      body: JSON.stringify({
        password,
        returnSecureToken: true,
        idToken: ctx.token,
      }),
    }).then(() => history.replace('/'));
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={passwordInput} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button onClick={submitHandler}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
