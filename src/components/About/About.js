import React from 'react';
import person from '../images/person.jpg'
const About = () => {
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={person} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold ">
                    I help businesses and individuals <br /> to improve their online and offline image<br /> thanks to my<br /> expertise on photography and <br />videography.</h2>
                <p>I’m John, the one in the photo, and I’ve been dedicating myself to photography and videography for years now.I found my vocation when I was quite young: Impact the world through conveying emotions via photography in order to contribute to the society awareness.</p>

            </div>
        </div>

    );
};

export default About;