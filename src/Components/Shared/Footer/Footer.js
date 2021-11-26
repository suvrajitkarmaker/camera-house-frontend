import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="relative bg-blueGray-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © {new Date().getFullYear()} Camera House{" "}
                                <a
                                    href="https://www.creative-tim.com?ref=nr-footer"
                                    className="text-blueGray-500 hover:text-blueGray-800"
                                >
                            
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;