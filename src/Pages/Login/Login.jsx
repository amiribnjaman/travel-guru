import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="bg">
                <div className='login-form w-full'>
                    <div className='text-center text-white mb-4'>
                        <h1 className='text-4xl font-semibold mb-1'>Welcome Back</h1>
                        <p>Have a wonderful tour with Travel Guru</p>
                    </div>
                    <form className='mx-auto bg-white max-w-sm px-10 py-10 rounded-lg'>
                        <div className="mb-6">
                            <label htmlhtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                        </div>
                        <div className="mb-6">
                            <label htmlhtmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="text-sm">
                                <p>New to Travel Guru? <Link to='/signup' className='text-amber-600'>Create an account.</Link></p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <button type="submit" className="w-full text-white bg-[#F9A51A] hover:bg-[#ea940a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;