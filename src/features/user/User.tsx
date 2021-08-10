import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { createUserAsync, loginUserAsync, logoutUserAsync, selectUser } from './userSlice';
import styles from './Comic.module.scss';
import { Button, FloatingLabel, Form, Modal, Nav } from 'react-bootstrap';

export function User() {
  const user = useAppSelector(selectUser);
  const [signUp, showSignUp] = useState(false);
  const [logIn, showLogIn] = useState(false);

  const dispatch = useAppDispatch();

  const loginClose = () => showLogIn(false);
  const loginOpen = () => showLogIn(true);

  const signUpClose = () => showSignUp(false);
  const signUpOpen = () => showSignUp(true);

  const Login = () => {
    let userLogin = {email: '', password: ''};

    const handleChange = (event: any) => {
      userLogin = {...userLogin, [event.target.name]: event.target.value}
    }

    return (
      <Modal show={logIn} onHide={loginClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control name='email' type="email" placeholder="name@example.com" onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange}/>
            </FloatingLabel>
          </Form>
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
    let userRequest = {email: '', password: '', passwordConfirmation: ''};

    const handleChange = (event: any) => {
      userRequest = {...userRequest, [event.target.name]: event.target.value}
    }

    return (
      <Modal show={signUp} onHide={signUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control name='email' type="email" placeholder="name@example.com" onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword1" label="Password" className="mb-3">
              <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword2" label="Password Confirmation">
              <Form.Control name='passwordConfirmation' type="password" placeholder="Password Confirmation" onChange={handleChange} />
            </FloatingLabel>
          </Form>
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
          {user.email}|
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
    <Nav className="me-auto" >
      <UserInfo />
    </Nav>
  );
}
