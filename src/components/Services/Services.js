import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-8 mx-12'>
            {
                services.map(service => <div className="card  bg-base-100 shadow-xl ">
                    <figure><img className='service-img' src={service.image_url} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className='text-3xl font-bold'>{service.title}</p>
                        <p>{service.details.slice(0, 100) + '...'}</p>
                        <div className="card-actions justify-end">
                            <p className='text-2xl font-bold'>Price:<span className='text-2xl text-red-600 font-bold'> {service.price}$</span></p>
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Services; <h2>Services</h2>