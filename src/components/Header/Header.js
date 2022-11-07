import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-green-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Click For You</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <Link to='/'> <li><a>Home</a></li></Link>
                        <Link to='/services'> <li><a>Services</a></li></Link>
                        <Link><li><a>Login</a></li></Link>
                        <Link><li><a>Sign Up</a></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;