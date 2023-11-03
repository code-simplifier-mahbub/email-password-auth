import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Link to='/login'>Login</Link>
            <Link to = '/register'>Register</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;