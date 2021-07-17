import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import AlertMessage from '../layout/AlertMessage';

const LoginForm = () => {
  // Context
  const { loginUser } = useContext( AuthContext );

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;

  const onChangeLoginForm = event => setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  
  const login = async event => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (!loginData.success) {
        setAlert({ type: 'danger', message: loginData.message });
        setTimeout(() => setAlert(null), 3500);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form className='my-2' onSubmit={login} >
        <AlertMessage info={ alert } ></AlertMessage>

        <Form.Group>
          <Form.Control 
            type='text' 
            placeholder='Username' 
            name='username' 
            required 
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type='password' 
            placeholder='Password' 
            name='password' 
            required 
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button variant='success' type='submit' >Login</Button>
      </Form>
      <p> Don't have account?
        <Link to='/register'>
          <Button variant='info' size='sm' className='ms-2' > Register</Button>
        </Link>
      </p>
    </>
    
  )
}

export default LoginForm;
