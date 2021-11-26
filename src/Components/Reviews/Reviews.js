import React, { useEffect, useState } from 'react';
import Review from './Review/Review';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://quiet-dusk-60449.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <section className="pt-10 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-14">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Client Reviews</h2>

          </div>
        </div>
        <div className="flex flex-wrap">

          {
            reviews.map(item => <Review
              key={item._id}
              item={item}
            >
            </Review>)
          }
        </div>
      </div>
    </section>
  );
};

export default Reviews;