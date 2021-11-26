import React, { useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const Registration = () => {


    const [regData, setRegData] = useState({});
    const history = useHistory();
    const location = useLocation();

    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = { ...regData };
        newRegData[field] = value;
        setRegData(newRegData);
    }
    const handleRegSubmit = e => {
        console.log(regData)
        registerUser(regData.email, regData.password, regData.name, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <div className="loginpage container mx-auto px-20 pt-40 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        Sign up with
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button
                                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleGoogleSignIn}
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require("../../../Images/google.svg").default}
                                        />
                                        Google
                                    </button>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Or sign up with credentials</small>
                                </div>
                                <form onSubmit={handleRegSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Name"
                                            name="name"
                                            onBlur={handleOnBlur}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            name="email"
                                            onBlur={handleOnBlur}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            name="password"
                                            onBlur={handleOnBlur}
                                        />
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Create Account
                                        </button>
                                    </div>
                                    <div className="text-center mt-6">
                                        <Link to="/login">
                                            <small>Already have an accout</small>
                                        </Link>
                                    </div>
                                    {isLoading &&
                                        <>
                                            <div className="flex justify-center items-center">
                                                <div
                                                    className="
                                                    animate-spin
                                                    rounded-full
                                                    h-32
                                                    w-32
                                                    border-t-2 border-b-2 border-purple-500
                                                    "
                                                ></div>
                                            </div>
                                        </>
                                    }
                                    {user?.email &&
                                        <>
                                            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 " >
                                                <div className="flex items-center justify-center w-12 bg-green-500">
                                                    <svg
                                                        className="w-6 h-6 text-white fill-current"
                                                        viewBox="0 0 40 40"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div className="px-4 py-2 -mx-3">
                                                    <div className="mx-3">
                                                        <span className="font-semibold text-green-500 dark:text-green-400"
                                                        >Success</span
                                                        >
                                                        <p className="text-sm text-gray-600 dark:text-gray-200">
                                                            Your account was registered!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {authError &&
                                        <>
                                            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 " >
                                                <div class="flex items-center justify-center w-12 bg-red-500">
                                                    <svg
                                                        class="w-6 h-6 text-white fill-current"
                                                        viewBox="0 0 40 40"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div class="px-4 py-2 -mx-3">
                                                    <div class="mx-3">
                                                        <span class="font-semibold text-red-500 dark:text-red-400"
                                                        >Error</span
                                                        >
                                                        <p class="text-sm text-gray-600 dark:text-gray-200">
                                                            Your email is already used!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;