import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Header/NavBar';

const Root = () => {
    let location = useLocation();
    // console.log(location);
    useEffect(()=>{
        console.log(location.pathname);
        if(location.pathname === '/')
        {
            document.title="Donation-Home"
        }
        else{
            document.title=`Donation${location.pathname.replace('/',"-")}`
        }
    },[location.pathname])
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