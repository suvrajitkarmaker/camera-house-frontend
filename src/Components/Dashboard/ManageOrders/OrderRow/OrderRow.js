import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = (props) => {
    let { _id, address, contact, orderItem, username,useremail, status, orderDate} = props.item;
    return (
        <>
            <tr>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                <button
                        class="text-indigo-600 hover:text-indigo-900"
                    >
                        <Link to={`/products/${orderItem}`}>
                            Ordered Item
                        </Link>
                    </button>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {address}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {contact}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {username}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {useremail}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {status}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {orderDate}
                </td>

                <td
                    class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button 
                        class="text-indigo-600 hover:text-indigo-900"
                        onClick={handleDelete => props.isUpdateStatus(_id, 'Approved')}
                    >
                        Approved
                    </button>
                </td>
                <td
                    class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button 
                        class="text-indigo-600 hover:text-indigo-900"
                        onClick={handleDelete => props.isUpdateStatus(_id, 'Reject')}
                    >
                        Reject
                    </button>
                </td>
            </tr>

        </>
    );
};

export default OrderRow;