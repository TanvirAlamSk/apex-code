import React from 'react';
import Navber from '../components/navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;