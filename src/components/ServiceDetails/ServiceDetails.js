import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
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
        </div>
    );
};

export default ServiceDetails;