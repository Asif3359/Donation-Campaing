import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Donated from '../../Components/Donated/Donated';

const Donation = () => {
    const [donationData, setDonationData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    // Function to retrieve and parse data from localStorage
    useEffect(() => {
        const localStorageData = localStorage.getItem('donations');

        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            setDonationData(parsedData);
        }
    }, []);
    const handleShowAll = () => {
        // Toggle the showAll state when the button is clicked
        setShowAll(!showAll);
    };
    return (
        <div className='px-5 mt-7 mb-7'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-5'>
                {showAll ?
                    donationData.map((donation, index) => <Donated key={index} donation={donation} ></Donated>)
                    :
                    donationData.slice(0, 4).map((donation, index) => <Donated key={index} donation={donation} ></Donated>)

                }
            </div>
            <div className='flex justify-center items-start m-5'>
                <button className='btn btn-sm btn-primary my-2 ' onClick={handleShowAll}>
                    {showAll ? 'Show Less' : 'Show All'} {/* Toggle button text */}
                </button>
            </div>

        </div>
    );
};

export default Donation;