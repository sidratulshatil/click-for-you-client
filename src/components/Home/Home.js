import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../images/banner.jpg'
import './Home.css'

const Home = () => {
    const services = useLoaderData()
    const { title, price } = services
    return (
        <div>
            <div>
                <img className='banner' src={banner} alt="" />
                <div className='banner-text'>
                    <h1 >Looking For a Proffesional Photographer</h1>
                    <p className='text-2xl font-mono'>I document your choosen category to give you visual memories that you will cherish forever.</p>
                </div>
            </div>
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
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;