import { comment } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../Hooks/useTitle';
import './myReview.css'

const MyReviews = () => {
    const { user, handleDelete } = useContext(AuthContext)


    useTitle('My Review')
    const [myReviews, setMyReviews] = useState([])
    // console.log(myReviews)
    useEffect(() => {
        fetch(`https://click-for-you-server.vercel.app/review?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('click-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [myReviews])


    return (
        <div>
            <h2 className='text-4xl font-bold text-red-600'>My reviews</h2>
            {
                myReviews.length > 0 ?
                    <>
                        {
                            myReviews.map(myReview => <div className='my-review-div' key={myReview._id}>
                                <h1 className='text-2xl font-semibold'>Service Name: {myReview.title}</h1>
                                <h2> <span className='text-2xl font-semibold'>Review:</span> {myReview.comment}</h2>
                                <button onClick={() => handleDelete(myReview._id)} className="btn btn-sm mt-2">Delete review</button>
                                <Link to={`/editform/${myReview._id}`}><button className="btn btn-sm mt-2 ml-2">Edit review</button></Link>
                            </div>)
                        }
                    </>
                    :
                    <>
                        <p className='text-green-700 font-semibold text-3xl mt-4 mb-4'>No reviews were added</p>
                    </>
            }
        </div>
    );
};

export default MyReviews;