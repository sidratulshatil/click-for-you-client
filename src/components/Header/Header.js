import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                        {
                            user?.uid ?
                                <>
                                    <Link><li><button onClick={handleLogout} className="btn-ghost">Logout</button></li></Link>
                                </>
                                :
                                <>
                                    <Link to='/login'><li><a>Login</a></li></Link>
                                    <Link to='/register'><li><a>Register</a></li></Link>
                                </>
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;