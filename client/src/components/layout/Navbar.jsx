import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import Input from './Input';
import { IoSunny } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";
import { useSelector } from 'react-redux';

export default function Navbar() {

    
    //const [status, setStatus] = React.useState(useSelector((state) => state.user.user));
    const [status, setStatus] = useState(false);
    console.log(status);
  

    return (
        <div>
            <div className="navbar max-w-6xl mx-auto">
                <div className="flex-1">
                   <Link to={'/'} ><h1 className="text-2xl font-semibold cursor-pointer">GEO-GUIDE</h1></Link> 
                </div>
                <div className="flex-none gap-5">
                    <div className="form-control ">
                        <Input placeholder="Search..." />
                    </div>

                    <div>
                        {status ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
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
