import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-8 mx-12'>
            {
                services.map(service => <div className="card  bg-base-100 shadow-xl " key={service._id}>
                    <figure>
                        <PhotoProvider>
                            <PhotoView src={service.image_url}>

                                <img className='service-img' src={service.image_url} alt="Movie" />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className='text-3xl font-bold'>{service.title}</p>
                        <p>{service.details.slice(0, 100) + '...'}</p>
                        <div className="card-actions justify-end">
                            <p className='text-2xl font-bold'>Price:<span className='text-2xl text-red-600 font-bold'> {service.price}$</span></p>
                            <Link to={`/services/${service._id}`} ><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Services; <h2>Services</h2>