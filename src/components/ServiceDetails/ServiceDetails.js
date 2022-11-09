import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../Hooks/useTitle';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const service = useLoaderData()
    // console.log(service)
    useTitle('Service Details')
    const [reviews, setReviews] = useState([])
    // console.log(reviews)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/review?reviewId=${service?._id}`,
        )
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     logOut()
                // }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [data])

    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const comment = form.comment.value;

        const review = {

            name: user.displayName,
            reviewId: service._id,
            comment: comment,
            photoUrl: user.photoURL,
            email: email,
            title: service.title,
            dateAdded: new Date()
        }
        const procced = window.confirm('Are you sure??')
        if (procced) {
            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    alert('Review added successfully')
                    form.reset();

                })
                .catch(er => console.error(er));
        }
    }
    const handleDelete = (id) => {
        const procced = window.confirm('Are you sure??')
        if (procced) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted')
                        const remaining = reviews.filter(ord => ord._id !== id)
                        setReviews(remaining)
                    }
                })

        }
    }
    return (
        <div>
            <div className="card  bg-base-400 shadow-xl my-14 mx-48" key={service._id}>
                <figure><img className='service-img' src={service.image_url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p className='text-3xl font-bold'>{service.title}</p>
                    <p>{service.details}</p>
                    <div className="card-actions justify-end">
                        <p className='text-2xl font-bold'>Price:<span className='text-2xl text-red-600 font-bold'> {service.price}$</span></p>
                    </div>
                    <Link to='/'><button className="btn btn-active mx-auto my-4">Back to Home</button></Link>
                </div>
            </div>
            <div>

                <h2 className='text-4xl font-bold text-red-500'>Reviews</h2>
                {
                    user?.uid ?
                        <>
                            <Form onSubmit={handlePlaceReview}>
                                <textarea name='comment' className="textarea textarea-bordered mt-4" placeholder="your review"></textarea><br />
                                <button type='submit' className="btn btn-sm">Add review</button>

                            </Form>
                        </>
                        :
                        <p className='mt-4'>Please <Link className='login-btn ' to='/login'>Login</Link> to write a review</p>

                }
                {
                    reviews.length > 0 ?
                        <>
                            <Review reviews={reviews} handleDelete={handleDelete}></Review>
                        </>
                        :
                        <p className='text-green-700 font-semibold text-3xl mt-4 mb-4'>No reviews were added</p>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;