import React from 'react';

const ProductRow = (props) => {
    let { _id, title, description, price, image } = props.item;
    description = description.substring(0, 50)+'...';
    return (
        <>
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <img
                                class="h-10 w-10 rounded-full"
                                src={image}
                                alt=""
                            />
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {title}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {description}
                </td>
                {/* <td class="px-6 py-4 whitespace-nowrap">
                    <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                    </span>
                </td> */}
                <td class="px-6 py-4 whitespace-nowrap text-x text-black-500">
                    {price}
                </td>
                <td
                    class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button 
                        class="text-indigo-600 hover:text-indigo-900"
                        onClick={handleDelete => props.isDelete(_id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>

        </>
    );
};

export default ProductRow;