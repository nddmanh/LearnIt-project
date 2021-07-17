import React, { useContext } from 'react';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../../contexts/authContext';

const Auth = ({ authRoute }) => {
  const { authState: {authLoading, isAuthenticated }} = useContext(AuthContext);

  let body;
  
  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation='border' variant='info' ></Spinner>
      </div>
    )
  } else if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  } else {
    body = (
      <>
        { authRoute === 'login' && <LoginForm /> }
        { authRoute === 'register' && <RegisterForm /> }
      </>
    )
  }
  
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1> Learn It</h1>
          <h4> Keep tracking of what you are learning </h4>
          {body}
        </div>
      </div>
    </div>
  )
}

export default Auth
