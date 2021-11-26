import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Product from '../Products/Product/Product';
import ShipInfo from './ShipInfo/ShipInfo';
import Header from '../Shared/Header/Header';
const Shipping = () => {

    const { productid } = useParams();
    const [productItem, setProductItem] = useState([]);
    const [shipInfo, setShipInfo] = useState({});

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://quiet-dusk-60449.herokuapp.com/products/${productid}`)
            .then(res => res.json())
            .then(data => setProductItem(data));
    }, [productid]);
    console.log(productItem)

    return (
        
        <section className="section-item bg-blueGray-200">
            <Header></Header>
            <div className="container mx-auto px-4">

                <div className="flex flex-wrap items-center">

                    {productItem._id &&
                        <>
                            <Product
                                key={productItem._id}
                                item={productItem}
                                comp={true}
                            >
                            </Product>
                            <ShipInfo
                                key={productItem._id}
                                item={productItem}
                            ></ShipInfo>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Shipping;