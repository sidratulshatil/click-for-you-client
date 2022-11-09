import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider';
import './Login.css'
import useTitle from '../Hooks/useTitle';

const Login = () => {
    const { providerLogin, signIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    useTitle('Login')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                if (user) {
                    navigate(from, { replace: true })
                }
                else {
                    alert('You are not logged in!!')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                if (user) {
                    navigate(from, { replace: true })
                }
                else {
                    alert('You are not logged in!!')
                }
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className="hero min-h-screen bg-base-200">

                    <div className="hero-content ">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div>
                                    <h2 className='text-4xl font-bold'>Login</h2>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />


                                </div>
                                <span><p>Didn't have an account?<Link className='redirect-btn' to='/register'>Register Now</Link></p></span>
                                <p className='mr-auto text-red-600'>{error}</p>

                                <Link><button onClick={handleGoogleLogin} class="btn btn-ghost"><FaGoogle></FaGoogle>  <span className='ml-4'>Log in with Google</span> </button></Link>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>

        </div>
    );
};

export default Login;