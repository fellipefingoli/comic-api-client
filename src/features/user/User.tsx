import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { createUserAsync, loginUserAsync, logoutUserAsync, selectUser } from './userSlice';
import styles from './Comic.module.scss';
import { Button, Modal, Nav } from 'react-bootstrap';

export function User() {
  const user = useAppSelector(selectUser);
  const [signUp, showSignUp] = useState(false);
  const [logIn, showLogIn] = useState(false);
  const [userRequest, setUserRequest] = useState({email: '', password: '', passwordConfirmation: ''});
  const [userLogin, setUserLogin] = useState({email: '', password: ''});

  const dispatch = useAppDispatch();

  const loginClose = () => showLogIn(false);
  const loginOpen = () => showLogIn(true);

  const signUpClose = () => showSignUp(false);
  const signUpOpen = () => showSignUp(true);

  const Login = () => {
    const handleChange = (event: any) => setUserLogin({...userLogin, [event.target.name]: event.target.value});

    return (
      <Modal show={logIn} onHide={loginClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          email:
          <input name='email' id='html' type='text' value={userLogin.email} onChange={handleChange} />
          password:
          <input name='password' type='password' value={userLogin.password} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={loginClose} >Close</Button>
          <Button variant="primary" onClick={() => { dispatch(loginUserAsync(userLogin)); loginClose() }}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      )
  }

  const SignUp = () => {
    const handleChange = (event: any) => setUserRequest({...userRequest, [event.target.name]: event.target.value});

    return (
      <Modal show={signUp} onHide={signUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          email:
          <input name='email' type='text' value={userRequest.email} onChange={handleChange} />
          password:
          <input name='password' type='password' value={userRequest.password} onChange={handleChange} />
          password confirmation:
          <input name='passwordConfirmation' type='password' value={userRequest.passwordConfirmation} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={signUpClose} >Close</Button>
          <Button variant="primary" onClick={() => { dispatch(createUserAsync({ user: userRequest })); signUpClose() }}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const UserInfo = () => {
    if (user.logged)
      return (
        <div>
          <b>User:</b> {user.email}|
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
            onClick={loginOpen}
          >Login
          </button>|
          <button
            onClick={signUpOpen}
          >
            Sign-Up
          </button>
          <Login />
          <SignUp />
        </div>
      )
    }
  }

  return (
    <Nav className="me-auto">
      <UserInfo />
    </Nav>
  );
}
