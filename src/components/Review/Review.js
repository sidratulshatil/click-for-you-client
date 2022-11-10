import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './review.css'


const Review = ({ reviews, handleDelete }) => {
    const { user } = useContext(AuthContext)

    // const reviews = useLoaderData()


    return (
        <div className="">
            <h1></h1>
            {
                reviews.map(review => <table className="table  review-div">
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <th>Delete Review</th>
                                </label> */}
                            </th>
                            <th>Name</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                {/* <label>
                                    <button onClick={() => handleDelete(review._id)}>X</button>
                                </label> */}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="avatar-photo">
                                            <img src={review?.photoUrl} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{review.name}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                {review.comment}
                                <br />
                            </td>
                        </tr>
                    </tbody>



                </table>)
            }

        </div>
    );
};

export default Review;