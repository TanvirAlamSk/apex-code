import React from 'react';
import Navber from '../components/navber/Navber';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;