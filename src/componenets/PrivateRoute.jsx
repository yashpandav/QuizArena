import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLogin }) => {
    if (isLogin) {
        return children;
    }
    else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute