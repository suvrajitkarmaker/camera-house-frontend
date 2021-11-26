import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow/OrderRow';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://quiet-dusk-60449.herokuapp.com/manageorder')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const isHandleUpdateStatus = (itemId, status) => {
        console.log(itemId);
        let confirmMsg = 'Are you sure you want to approve this order?';
        let finalMsg = 'Approved Successful';
        if(status === 'Reject'){
            confirmMsg = 'Are you sure you want to cancel this order?';
            finalMsg = 'Ordered cancel';
        }
        if (window.confirm(confirmMsg)) {
            const updatedOrder = {
                status: status
            };
            const url = `https://quiet-dusk-60449.herokuapp.com/order/${itemId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedOrder)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert(finalMsg);

                        let updateOrders = [...orders];

                        updateOrders.map(item => {
                            if(item._id==itemId){
                                item.status = status;
                            }
                        })
                        setOrders(updateOrders);
                    }
                })
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
                                        <span class="sr-only">Approved</span>
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Cancel</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">

                                {
                                    orders.map(item => <OrderRow
                                        key={item._id}
                                        item={item}
                                        isUpdateStatus={isHandleUpdateStatus}
                                    >
                                    </OrderRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;