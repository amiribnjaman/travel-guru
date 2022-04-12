import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../assets/img/google-logo.png';
import useFirebase from '../../hooks/useFirebase';

const Signup = () => {

    const { handleGoogleSignIn } = useFirebase();

    return (
        <div className='bg'>
            <div className='signup-form w-full'>
                <div className='text-center text-white mb-4'>
                    <h1 className='text-4xl font-semibold mb-1'>Make a User</h1>
                    <p>Welcome to Travel Guru's world</p>
                </div>
                <div className='mx-auto bg-white max-w-sm px-10 pb-10 pt-6 rounded-lg'>
                    <form>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="mx-auto relative z-0 mb-6 w-full group">
                            <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        {/* <div className="relative z-0 mb-6 w-full group">
                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label htmlFor="floating_repeat_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div> */}

                        <div className="mb-3 text-sm">
                            <p>Already have an account? <Link to='/login' className='text-amber-600'>Login</Link></p>
                        </div>

                        <div className='w-full'>
                            <button type="submit" className="mx-auto text-white px-10 bg-[#F9A51A] hover:bg-[#ea940a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full py-2 text-center ">Register</button>
                        </div>
                        <div className='flex justify-around items-center my-1'>
                            <div className='bg-gray-200 h-0.5 w-2/5'></div>
                            <div className='w-1/5 text-center'>or</div>
                            <div className='bg-gray-200 h-0.5 w-2/5'></div>
                        </div>
                    </form>
                    <div>
                        <button onClick={handleGoogleSignIn} className='flex justify-around w-full border rounded-3xl p-1 font-semibold'>
                            <img className='w-8' src={GoogleLogo} alt="" />
                            Sign in with Google
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;