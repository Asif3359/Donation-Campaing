import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-[70vh] " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className='flex flex-col gap-3'>
                    <p className='text-white text-5xl'>I Grow By Helping People In Need</p>
                    <div className='flex gap-0 justify-center'>
                        <input className='p-2 rounded-l-lg w-1/2' type="search" />
                        <button className=' btn btn-primary rounded-r-lg '>Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;