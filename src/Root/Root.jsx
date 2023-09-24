import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Header/NavBar';

const Root = () => {
    return (
        <div >
            <div className='container mx-auto relative  top-0 left-0 right-0 z-10'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;