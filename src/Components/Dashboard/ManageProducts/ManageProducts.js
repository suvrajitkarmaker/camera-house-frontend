import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow/ProductRow';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://quiet-dusk-60449.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    
    const isHandleDelete = (itemId) => {
        console.log(itemId)
        if (window.confirm('Are you sure you want to delete this product?')) {
            const url = `https://quiet-dusk-60449.herokuapp.com/products/${itemId}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(user => user._id !== itemId);
                        setProducts(remainingProducts);
                    }
                });
        }
    }

    return (

        <div class="minhight-section flex flex-col text-left">
            <div className="text-center m-4 text-2xl" >
                <h1>Product list</h1>
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
                                        Product Image
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Product title
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Product description
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Product price
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Delete</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">

                                {
                                    products.map(item => <ProductRow
                                        key={item._id}
                                        item={item}
                                        comp='manageOrder'
                                        isDelete={isHandleDelete}
                                    >
                                    </ProductRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;