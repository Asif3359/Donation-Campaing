import React from 'react';
import Header from '../../Components/Header/NavBar';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Donations from '../../Components/Donations/Donations';

const Home = () => {
    const donations = useLoaderData();
    // console.log(Donations);
    return (
        <div className='px-5 w-full  z-0'>
           <Banner></Banner>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
            {
                donations.map( donation => <Donations key={donation.id} donation={donation}></Donations> ) 
            }
           </div>
        </div>
    );
};

export default Home;