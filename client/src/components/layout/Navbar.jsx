import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import Input from './Input';
import { IoSunny } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {

    const status = useSelector((state) => state.user.user);

    console.log(status);
    const dispatch = useDispatch();


    function logouthandler() {
        console.log('logout')
        dispatch(logout());
        localStorage.removeItem('geo-user');
    }
  

    return (
        <div>
            <div className="navbar max-w-6xl mx-auto">
                <div className="flex-1">
                   <Link to={'/'} ><h1 className="text-2xl font-semibold cursor-pointer">GEO-GUIDE</h1></Link> 
                </div>
                <div className="flex-none gap-5">
                    <ul className='flex gap-7 font-semibold uppercase text-sm'>
                        <li className='cursor-pointer hover:text-purple-600'>Home</li>
                        <li className='cursor-pointer hover:text-purple-600'>About</li>
                        <li className='cursor-pointer hover:text-purple-600'>Contact</li>
                    </ul>

                    <div>
                        {status ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul className="mt-3 z-[1] px-5 gap-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52">
                                    <li className='cursor-pointer hover:text-purple-500'>Profile </li>
                                    <li className='cursor-pointer hover:text-purple-500'>Settings</li>
                                    <li onClick={()=>logouthandler()} className='cursor-pointer hover:text-purple-500'>Logout</li>
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <Link to={"/signup"}><Button>Signup</Button></Link>
                            </div>
                        )}
                    </div>




                </div>
            </div>
        </div>
    )
}
