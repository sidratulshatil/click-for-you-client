import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar header-div">
                <div className="flex-1">
                    <button className="btn btn-ghost normal-case text-xl">Click For You</button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <Link to='/'> <li><button>Home</button></li></Link>
                        <Link to='/services'> <li><button>Services</button></li></Link>
                        {
                            user?.uid ?
                                <>
                                    <Link to='/myreviews'><li><button className="btn-ghost">My Reviews</button></li></Link>
                                    <Link to='/addservice'><li><button className="btn-ghost">Add Service</button></li></Link>
                                    <Link><li><button onClick={handleLogout} className="btn-ghost">Logout</button></li></Link>
                                </>
                                :
                                <>
                                    <Link to='/login'><li><button className="btn-ghost">Login</button></li></Link>
                                    <Link to='/register'><li><button className="btn-ghost">Register</button></li></Link>
                                </>
                        }
                        <Link to='/blog'> <li><button>Blog</button></li></Link>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;