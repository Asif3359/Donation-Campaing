import React from 'react';
import { NavLink } from 'react-router-dom';

const Donations = ({ donation }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, Button_bg, Description, Price } = donation || {};
    return (
        <NavLink to={`/donationDetails/${id}`}>
            <div className='pb-5 rounded-lg bg-opacity-20' style={{
                backgroundColor: `${card_bg_color}`
            }}>
                <img className='w-full h-[200px] mb-2 rounded-t-lg' src={picture} alt="" />
                <div className='pl-3 '>
                    <button className="mt-2  px-3 py-1 rounded-md font-semibold " style={
                        {
                            backgroundColor: `${category_bg_color}`,
                            color: `${text_button_bg_color}`
                        }
                    }>{category}
                    </button>
                    <h1 className='font-semibold text-xl py-2' style={{
                        color: `${text_button_bg_color}`
                    }}>{title.slice(0, 25)} </h1>
                </div>
            </div>
        </NavLink>
    );
};

export default Donations;