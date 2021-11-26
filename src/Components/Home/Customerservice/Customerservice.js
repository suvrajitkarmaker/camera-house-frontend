import React from 'react';
import './Customerservice.css'
const Customerservice = () => {
    return (
            <section className="">
                <h2 className="text-4xl font-semibold">Customer Service</h2>
                <div className="container mx-auto p-12">
                    
                    <div className="flex flex-wrap items-center">



                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <img src={'https://image.freepik.com/free-vector/livestream-vlogger-illustration_1150-43223.jpg'} className="login-img" alt="..." />
                        </div>
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto text-2xl">
                        <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <h3>Capture your beautiful moment</h3>
                            <br />
                            <h3>For any kind of information you can call us</h3>
                            <h3>Call: 1234567</h3>
                        </div>


                    </div>
                </div>
            </section>
    );
};

export default Customerservice;