import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product/Product';
import Header from '../Shared/Header/Header';
import './SingleProduct.css'
const SingleProduct = () => {

    const { productid } = useParams();
    const [productItem, setProductItem] = useState([]);


    useEffect(() => {
        fetch(`https://quiet-dusk-60449.herokuapp.com/products/${productid}`)
            .then(res => res.json())
            .then(data => setProductItem(data));
    }, [productid]);
    console.log(productItem)

    return (
        
        <section className="section-item bg-blueGray-200">
            <Header></Header>
            <div className="container mx-auto align-middle">

                
                    {productItem._id &&
                        <>
                        
                            <Product
                                key={productItem._id}
                                item={productItem}
                                comp={true}
                            >
                            </Product>
                            
                        </>
                    }
            </div>
        </section>
    );
};

export default SingleProduct;