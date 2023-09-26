import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {

    const donationDetails = useLoaderData();
    // console.log(donationDetails);
    const params = useParams();
    const { id } = params;
    // console.log(id);
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        const suspectDonation = donationDetails.find(dona => dona.id == id);
        setDonation(suspectDonation);

    }, [id, donationDetails])


    const handleDetails = () => {
        const localStorageData = localStorage.getItem('donations');

        if (!localStorageData) {
            toast.success(' Successfully Complete your Donation', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            const initialDonations = [donation];
            localStorage.setItem('donations', JSON.stringify(initialDonations));
        } else {
            const existingDonations = JSON.parse(localStorageData);
            const existingDonation = existingDonations.find((dona) => dona.id == id);

            if (!existingDonation) {
                toast.success('Successfully Complete your Donation', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                existingDonations.push(donation);
                localStorage.setItem('donations', JSON.stringify(existingDonations));
            } else {
                toast.info('You Already complete Donation', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        }

    }

    return (
        <div className='px-4 mt-4 z-0'>
            <div className='relative'>
                <img className='w-full h-[20rem] lg:h-[30rem]' src={donation.picture} alt="" />
                <div className='absolute bottom-0 w-full left-0 py-4 px-2 bg-[#00000047]'>
                    <button onClick={() => handleDetails()} style={{
                        backgroundColor: `${donation.text_button_bg_color}`
                    }} className=' btn text-white'>Donate ${donation.price}
                    </button>
                    <div>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
            <h1 className='text-2xl md:text-5xl font-semibold mb-2 md:mb-6 mt-4'>{donation.title}</h1>
            <p className='py-1 mb-4' >{donation.description}</p>
        </div>
    );
};

export default DonationDetails;