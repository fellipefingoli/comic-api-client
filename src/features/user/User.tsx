import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { createUserAsync, loginUserAsync, logoutUserAsync, selectUser } from './userSlice';
import styles from './Comic.module.scss';

export function User() {
  const user = useAppSelector(selectUser);
  const [signUp, showSignUp] = useState(false);
  const [logIn, showLogIn] = useState(false);
  const [userRequest, setUserRequest] = useState({email: '', password: '', passwordConfirmation: ''});
  const [userLogin, setUserLogin] = useState({email: '', password: ''});

  const dispatch = useAppDispatch();

  const Login = () => {
    const handleChange = (event: any) => setUserLogin({...userLogin, [event.target.name]: event.target.value});

    if (logIn)
      return (
        <div>
          email:
          <input name='email' id='html' type='text' value={userLogin.email} onChange={handleChange} />
          password:
          <input name='password' type='password' value={userLogin.password} onChange={handleChange} />
          <button
            onClick={() => { dispatch(loginUserAsync(userLogin)); showLogIn(false) }}
          >Send</button>
        </div>
      )
    else {
      return (<div></div>)
    }
  }
  const handleChange = (event: any) => setUserRequest({...userRequest, [event.target.name]: event.target.value});

  const SignUp = () => {
    if (signUp)
      return (
        <div>
          email:
          <input name='email' type='text' value={userRequest.email} onChange={handleChange} />
          password:
          <input name='password' type='password' value={userRequest.password} onChange={handleChange} />
          password confirmation:
          <input name='passwordConfirmation' type='password' value={userRequest.passwordConfirmation} onChange={handleChange} />
          <button
            onClick={() => { dispatch(createUserAsync({ user: userRequest })); showSignUp(false) }}
          >Send</button>
        </div>
      )
    else {
      return (<div></div>)
    }
  }

  const UserInfo = () => {
    if (user.logged)
      return (
        <div>
          <b>User:</b> {user.email}
          <button
            onClick={() => dispatch(logoutUserAsync())}
          >
            Logout
          </button>
        </div>
      )
    else {
      return (
        <div>
          <button
            onClick={() => showLogIn(true) }
          >Login
          </button>|
          <button
            onClick={() => showSignUp(true) }
          >
            Sign-In
          </button>
          <Login />
          <SignUp />
        </div>
      )
    }
  }

  return (
    <div>
      <UserInfo />
    </div>
  );
}
