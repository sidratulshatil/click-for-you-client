import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../Hooks/useTitle';

const Register = () => {
    const { createUser, updatUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    useTitle('Register')
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                handleUpdatUserProfile(name, photoURL)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleUpdatUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updatUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div >
                <Form onSubmit={handleSubmit}>
                    <div className="hero min-h-screen bg-base-200">

                        <div className="hero-content ">

                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div>
                                        <h2 className='text-4xl font-bold'>Register</h2>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="photoURL" name='photoURL' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' className="input input-bordered" />

                                    </div>
                                    <span><p>Already have an account?<Link className='redirect-btn' to='/login'>Login Now</Link></p></span>
                                    <p className='mr-auto text-red-600'>{error}</p>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;