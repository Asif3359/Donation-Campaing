import React from 'react';
import { NavLink } from 'react-router-dom';

const Donated = ({donation}) => {
    return (
        <div style={{
            backgroundColor: `${donation.card_bg_color}`
            }} className='  rounded-lg'>
                <div className='flex flex-col md:flex-row gap-2'>
                    <div className='flex-1'>
                        <img className='w-full h-[200px]  rounded-lg' src={donation.picture} alt="" />
                    </div>
                    <div className='p-2 flex-1 flex flex-col justify-between'>
                        <button className="mt-2 w-fit px-3 py-1 rounded-md font-semibold " style={
                            {
                                backgroundColor: `${donation.category_bg_color}`,
                                color: `${donation.text_button_bg_color}`
                            }
                        }>{donation.category}
                        </button>
                        <h2 className='text-xl font-semibold'>{donation.title}</h2>
                        <h3 className='font-semibold' style={{ color: `${donation.text_button_bg_color}` }}>${donation.price}.00</h3>
                        <NavLink to={`/donationDetails/${donation.id}`}><button className='btn btn-sm text-white' style={{ backgroundColor: `${donation.text_button_bg_color}` }}>View Details</button></NavLink>
                    </div>
                </div>

        </div>
    );
};

export default Donated;