import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../Pagees/Home/Home';

const NavBar = () => {
    return (
            <div className="navbar bg-base-100  ">
                <div className="flex-1">
                    <img src="/Logo.png " className='w-48 p-1' alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <div className='hidden md:flex gap-5'>
                            <li className='font-semibold'><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Home
                            </NavLink></li>
                            <li className='font-semibold'><NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Donation
                            </NavLink></li>
                            <li className='font-semibold'><NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Statistics
                            </NavLink></li>

                        </div>
                        <li className='md:hidden'>
                            <details>
                                <summary >
                                   <p className='font-bold'>Menu</p>
                                </summary>
                                <ul className=" p-2 bg-base-100 z-30">
                                    <li><NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        Home
                                    </NavLink></li>
                                    <li><NavLink
                                        to="/donation"
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        Donation
                                    </NavLink></li>
                                    <li><NavLink
                                        to="/statistics"
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        Stat
                                    </NavLink></li>
                                </ul>
   
                            </details>
                        </li>
                    </ul>
                </div>
            </div>

    );
};

export default NavBar;