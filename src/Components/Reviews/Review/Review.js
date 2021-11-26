import React from 'react';

const Review = (props) => {
    let { _id, review, rating, reviewer } = props.item;
    rating = parseInt(rating);
    if (rating > 5) {
        rating = 5;
    }
    return (
        <div role="listitem" className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <div className="p-4">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />

                    <p className="xl:text-xl xl:leading-loose text-gray-600">{review}</p>
                    <p className="mt-4 text-base font-semibold leading-none text-gray-800">{reviewer}</p>
                    <ul class="flex justify-center">
                        {new Array(rating).fill(null).map(() => (
                            <li>
                                <i class="fas fa-star fa-sm text-yellow-500 mr-1"></i>
                            </li>
                        ))}

                        {new Array(5-rating).fill(null).map(() => (
                            <li>
                                <i class="far fa-star fa-sm text-yellow-500 mr-1"></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Review;