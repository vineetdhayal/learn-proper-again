import React from 'react';
import { Route, redirect } from 'react-router-dom';
const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
    render={(props) => isAuthenticated() ? <Component {...props} /> : <redirect to='/login'/>}
    ></Route>
  )
}

export default ProtectedRoute
