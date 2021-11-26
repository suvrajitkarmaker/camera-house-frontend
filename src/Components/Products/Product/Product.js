import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = (props) => {
    let { _id, image, title, price, description } = props.item;
    if (description && !props.comp) {
        description = description.substring(0, 50) + '...';
    }
    return (
        <div className="product w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                    alt="..."
                    src={image}
                    className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                    <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                        <polygon
                            points="-30,95 583,95 583,65"
                            className="text-lightBlue-500 fill-current"
                        ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                        {title}
                    </h4>
                    <h4 className="text-xl font-bold text-white">
                        Price: {price}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                        {description}
                    </p>
                </blockquote>
                {
                    props.comp ||<div className="text-center mt-6">
                    <button
                        class="
                    bg-purple-500
                    text-white
                    active:bg-purple-600
                    font-bold
                    uppercase
                    text-xs
                    px-4
                    py-2
                    rounded
                    shadow
                    hover:shadow-md
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-4
                    ease-linear
                    transition-all
                    duration-150
                "
                        type="button"
                    >
                        <Link to={`/shipping/${_id}`}>
                            Buy Now
                        </Link>
                    </button>
                </div>
                }
            </div>
        </div>

    );
};

export default Product;