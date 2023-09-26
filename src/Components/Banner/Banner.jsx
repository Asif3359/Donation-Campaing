import React, { useState } from 'react';
import Search from '../Search/Search';

const Banner = ({ donations }) => {

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {

        const filteredResults = donations.filter((item) => item.category.toLowerCase() === searchInput.toLowerCase());

        setSearchResults(filteredResults);
        setSearchInput("");
    };

    // bg-opacity-60

    return (
        <>
            <div className="hero w-full h-[20rem] lg:h-[30rem] " style={{ backgroundImage:'url(/Rectangle.jpg)' }}>
                <div className="hero-overlay bg-gradient-to-r from-blue-50 to-blue-50 opacity-80 "></div>
                <div className='flex flex-col gap-3'>
                    <p className='text-center text-gray-700 text-3xl lg:text-5xl z-10'>I Grow By Helping People In Need</p>
                    <div className='flex gap-0 justify-center z-10'>
                        <input className='p-2 rounded-l-lg w-1/2 outline-transparent border-2 border-gray-300' type="search"
                            placeholder="Enter category..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)} />

                        <button onClick={handleSearch} className=' btn bg-blue-400 p-3 text-white border2 border-gray-300  rounded-none rounded-r-lg hover:text-blue-400 '>Search</button>
                    </div>
                </div>
            </div>
            {
                  searchResults.length?
                    <div className='mt-5'>
                        <div> 
                            <h1 className='text-2xl font-semibold'>Your Search Result</h1>
                        </div>
                        <div className=' grid grid-cols-1 gap-4'>
                            {
                                searchResults.map(result => <Search key={result.id} result={result}></Search>)
                            }
                        </div>
                    </div>
                    :""
            }

        </>
    );
};

export default Banner;