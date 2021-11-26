import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Link, useHistory } from "react-router-dom";

const ShipInfo = (props) => {
    console.log(props.item)
    const [shipInfo, setShipInfo] = useState({});
    const history = useHistory();
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newShipData = { ...shipInfo };
        newShipData[field] = value;
        setShipInfo(newShipData);
    }
    const handleAddShipInfo = e => {
        let newShipData = { ...shipInfo };
        newShipData['orderItem'] = props.item._id;
        newShipData['username'] = user.displayName;
        newShipData['useremail'] = user.email;
        console.log(newShipData);
        fetch('https://quiet-dusk-60449.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newShipData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully placed your order')
                    history.push('/')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <form onSubmit={handleAddShipInfo}>
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
                        name="contact"
                        onChange={handleOnChange}
                        value={user.displayName}
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
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        name="contact"
                        onChange={handleOnChange}
                        value={user.email}
                    />
                </div>
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Delivery address
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Delivery address"
                        name="address"
                        onChange={handleOnChange}

                    />
                </div>
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Contact number
                    </label>
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Contact number"
                        name="contact"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="text-center mt-6">
                    <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Place your order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ShipInfo;