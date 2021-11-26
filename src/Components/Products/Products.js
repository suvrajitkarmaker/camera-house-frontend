import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://quiet-dusk-60449.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  products = products.slice(0, 6);
  return (
    <section className="pt-10 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-14">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Top Products</h2>
          </div>
        </div>
        <div className="flex flex-wrap">

          {
            products.map(item => <Product
              key={item._id}
              item={item}
            >
            </Product>)
          }
        </div>
      </div>
    </section>
  );
};

export default Products;