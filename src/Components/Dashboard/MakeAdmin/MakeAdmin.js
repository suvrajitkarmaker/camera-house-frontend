import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';
import Header from '../../Shared/Header/Header';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token, isLoading } = useAuth();

    const handleOnChange = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user);
        console.log(token);
        fetch('https://quiet-dusk-60449.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Successfully maked your admin')
                    e.target.reset();
                }
            })

        e.preventDefault()
    }
    return (
        <div className="section-item">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                            <div className="flex-auto p-5 lg:p-10">
                                <h4 className="text-2xl font-semibold">
                                    Here you can add admin email
                                </h4>
                                <form onSubmit={handleAdminSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Admin email
                                        </label>
                                        <textarea
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Admin email"
                                            name="email"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Add admin
                                        </button>
                                    </div>

                                    {isLoading &&
                                        <>
                                            <div class="flex justify-center items-center">
                                                <div
                                                    class="
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

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;