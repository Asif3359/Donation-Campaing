import React from 'react';

const Donations = ({donation}) => {
    const {id, picture, category,category_bg_color}=donation || {};
    return (
        <div>
            <img src={picture} alt="" />
            <h2 className='text-white p-2' style={
            {
                backgroundColor:`${category_bg_color}`
            }
            }>{category}</h2>
        </div>
    );
};

export default Donations;