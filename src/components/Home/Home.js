import React from 'react';
import banner from '../images/banner.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <img className='banner' src={banner} alt="" />
                <div className='banner-text'>
                    <h1 >Looking For a Proffesional Photographer</h1>
                    <p className='text-2xl font-mono'>I document your choosen category to give you visual memories that you will cherish forever.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;