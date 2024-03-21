import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import Input from '../components/layout/Input';
import Button from '../components/layout/Button';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginRoute } from '../utils/APIRoutes';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { userRegister } from '../store/userSlice';

function Login() {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    async function login(data) {
        if (data) {
            try {
                const response = await axios.post(loginRoute, data);
                const userData = response.data.user;

                dispatch(userRegister({ userData: userData }));

                toast.success('Login Successfully!!!');
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/');
            } catch (error) {
                console.error("Error occurred:", error);
                toast.error("Invalid Email or Password!!!");
            }
        }
    }

    return (
        <div>
            {/* Signin form start here */}
            <div className="mx-auto max-w-md p-10 rounded-lg bg-gray-50 mt-10">
                <div className="text-center">
                    <h2 className="text-2xl font-bold  uppercase">Login</h2>
                    <h4 className='mt-3 text-gray-400'>Enter your email below to login to your account</h4>
                </div>
                <div className='error text-center'>
                    {error && <p className='text-red-400'>{error}</p>}
                </div>
                
                <div>
                    <form onSubmit={handleSubmit(login)} className="space-y-5 mt-5">                              {/* handelsubmit come from react-hook-form, in this you pass your method to handle form  */}
                        <div className='my-5'>
                            <Input
                                label='Email'
                                type='email'
                                placeholder='Enter your email'
                                {...register('email', {
                                    required: true,
                                    validate: {
                                        email: (value) => value.includes('@') || 'Invalid email'
                                    }
                                })} />
                        </div>
                        <div className='my-5'>
                            <Input
                                label='Password'
                                type='password'
                                placeholder='Enter your password'
                                required
                                {...register('password', { required: true })}
                            />

                        </div>
                        <div className="flex items-center">
                            <Link className="ml-auto inline-block text-sm underline" href="#">
                                Forgot your password?
                            </Link>
                        </div>
                        <Button className="w-full" type="submit">
                            Login
                        </Button>
                    </form>
                    <div className="mt-7 text-center text-sm text-gray-600">
                        Don't have an account? <Link to="/signup" className="underline font-semibold">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
