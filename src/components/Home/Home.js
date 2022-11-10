import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../images/banner.jpg'
import './Home.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Footer from '../Footer/Footer';
import useTitle from '../Hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import RecentWork from '../RecentWork/RecentWork';

const Home = () => {
    const services = useLoaderData()
    const { title, price, _id } = services
    const { loading } = useContext(AuthContext)
    useTitle('Click For You')
    return (
        <div className='mt-8'>


            <div>
                <img className='banner' src={banner} alt="" />
                <div className='banner-text'>
                    <h1 >Looking For a Proffesional Photographer</h1>
                    <p className='text-2xl font-mono'>I document your choosen category to give you visual memories that you will cherish forever.</p>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-8 mx-12'>
                {
                    loading ?
                        <>
                            <button className="btn btn-square loading"></button>
                        </>
                        :
                        <>
                            {
                                services.map(service => <div className="card  bg-base-100 shadow-xl " key={service._id}>
                                    <figure>  <PhotoProvider>
                                        <PhotoView src={service.image_url}>

                                            <img className='service-img' src={service.image_url} alt="Movie" />
                                        </PhotoView>
                                    </PhotoProvider></figure>
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
                        </>
                }
            </div>
            <div>
                <Link to='/services'><button className="btn btn-active btn-accent text-white font-bold">See All</button></Link>
            </div>
            <div className='my-5 rounded-lg'>
                <h1 className='text-3xl text-yellow-800 my-2 font-serif font-bold'>My RecentWorks</h1>
                <RecentWork></RecentWork>
            </div>
            <div className='mt-12 bottom-0'>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;