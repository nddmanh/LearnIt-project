import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import Spinner from 'react-bootstrap/Spinner';

const ProtectedRoute = ({ component: Componnet, ...rest }) => {
  const { authState: {authLoading, isAuthenticated }} = useContext(AuthContext);

  if (authLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation='border' variant='info' />
      </div>
    )
  }
  return (
    <Route {...rest} 
      render={props => 
        isAuthenticated ? (
          <> 
            <Componnet {...rest} {...props} />
          </>
          ) : ( 
          <Redirect to='/login' /> 
        ) 
      } 
    />
  )
}

export default ProtectedRoute
