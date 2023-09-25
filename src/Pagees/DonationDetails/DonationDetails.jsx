import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {

    const donationDetails = useLoaderData();
    // console.log(donationDetails);
    const params = useParams();
    const {id}= params;
    // console.log(id);
    const [donation , setDonation]=useState([]);

    useEffect(()=>{
        const suspectDonation = donationDetails.find(dona => dona.id==id);
        setDonation(suspectDonation);


        


    },[id,donationDetails])


    const handleDetails =()=>{
        const localStorageData = localStorage.getItem('donations');

        if (!localStorageData) {
            // If no data exists in localStorage, create an empty array and add the first donation
            const initialDonations = [donation];
            localStorage.setItem('donations', JSON.stringify(initialDonations));
        } else {
            // If data exists in localStorage, parse it and add the new donation
            const existingDonations = JSON.parse(localStorageData);

            // Check if the donation with the same ID already exists in the array
            const existingDonation = existingDonations.find((dona) => dona.id == id);

            if (!existingDonation) {
                // Add the new donation to the existing array
                existingDonations.push(donation);
                localStorage.setItem('donations', JSON.stringify(existingDonations));
            }
        }
    } 

    return (
        <div className='px-4 mt-4 z-0'>
            <div className='relative'>
                <img className='w-full h-[20rem] lg:h-[30rem]' src={donation.picture} alt="" />
                <div className='absolute bottom-0 w-full left-0 py-4 px-2 bg-[#00000047]'>
                    <button onClick={()=>handleDetails()}  style={{
                        backgroundColor:`${donation.text_button_bg_color}`
                    }} className=' btn text-white'>Details</button>
                </div>
            </div>
            <h1 className='text-2xl md:text-5xl font-semibold mb-2 md:mb-6 mt-4'>{donation.title}</h1>
            <p className='py-1 mb-4'>{donation.description}</p>
        </div>
    );
};

export default DonationDetails;