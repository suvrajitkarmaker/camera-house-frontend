import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHeader = () => {
    const { user } = useAuth();

    return (
        <div>
            <nav className="top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <div>
                        
                    </div>

                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">

                        <div className="items-center flex px-4">
                            {user.displayName}
                        </div>
                        <div className="items-center flex">
                            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                                {user.photoURL ?
                                    <img
                                        alt="..."
                                        className="w-full rounded-full align-middle border-none shadow-lg"
                                        src={user.photoURL}
                                    /> :
                                    ''
                                }
                            </span>
                        </div>


                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default DashboardHeader;