import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="bannerimg absolute top-0 w-full h-full bg-center bg-cover"
          >
            
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl mb-4">
                    Welcome To Camera House
                  </h1>
                  <button
                        class="
                    bg-purple-500
                    text-white
                    active:bg-purple-600
                    font-bold
                    uppercase
                    text-xs
                    px-3
                    py-3
                    rounded
                    shadow
                    hover:shadow-md
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                "
                        type="button"
                    >
                        <Link to={`/products`}>
                            Explore all products
                        </Link>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;