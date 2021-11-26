import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const [reviewData, setReviewData] = useState({});

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProData = { ...reviewData };
        newProData[field] = value;
        setReviewData(newProData);
    }
    const handleAddReview = e => {
        reviewData['reviewer']=user.displayName;
        console.log(reviewData);
        fetch('https://quiet-dusk-60449.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added your review.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="section-item">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                            <div className="flex-auto p-5 lg:p-10">
                                <h4 className="text-2xl font-semibold">
                                    Please add your review
                                </h4>
                                <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                    Please  fillup your review information
                                </p>
                                <form onSubmit={handleAddReview}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Review
                                        </label>
                                        <textarea
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Review description"
                                            name="review"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Rating (0 to 5)
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Rating"
                                            name="rating"
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Submit your review
                                        </button>
                                    </div>

                                    {isLoading &&
                                        <>
                                            <div class="flex justify-center items-center">
                                                <div
                                                    class="
                                                    animate-spin
                                                    rounded-full
                                                    h-32
                                                    w-32
                                                    border-t-2 border-b-2 border-purple-500
                                                    "
                                                ></div>
                                            </div>
                                        </>
                                    }

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;