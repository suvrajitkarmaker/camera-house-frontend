import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Customerservice from './Customerservice/Customerservice';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Customerservice></Customerservice>
            <Footer></Footer>
        </div>
    );
};

export default Home;
