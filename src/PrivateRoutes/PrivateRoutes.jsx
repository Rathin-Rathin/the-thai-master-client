import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <p className='w-4/12 mx-auto'>
            <progress className="progress progress-warning  w-full"></progress>
        </p>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    
};

export default PrivateRoutes;