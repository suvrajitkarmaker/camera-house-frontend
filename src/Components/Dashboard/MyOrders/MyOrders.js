import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrderRow from './MyOrderRow/MyOrderRow';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user, isLoading} = useAuth();

    useEffect(() => {
        fetch(`https://quiet-dusk-60449.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    if (isLoading && orders) {
        return <>
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
    const isHandleDelete = (itemId) => {
        console.log(itemId);
        let confirmMsg = 'Are you sure you want to delete this order?';
        let finalMsg = 'Deleted Successful';
        if (window.confirm(confirmMsg)) {
            const url = `https://quiet-dusk-60449.herokuapp.com/order/${itemId}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(user => user._id !== itemId);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    return (

        <div class="minhight-section flex flex-col text-left">
            <div className="text-center m-4 text-2xl" >
                <h1>Order list</h1>
            </div>
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Product
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Shipping Address
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Contact number
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Customer Name
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Customer Email
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Order date
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Delete</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">

                                {
                                    orders.map(item => <MyOrderRow
                                        key={item._id}
                                        item={item}
                                        isDelete={isHandleDelete}
                                    >
                                    </MyOrderRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;