import React from 'react';
import { Form } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    useTitle('Add Service')
    const notify = () => toast("Service added Succesfully!!", { position: 'top-center' })
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const imageUrl = form.imageUrl.value;
        const details = form.details.value;
        const price = form.price.value;

        const service = {
            title: title,
            image_url: imageUrl,
            details: details,
            price: price
        }

        fetch('https://click-for-you-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    notify()
                    console.log('done')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <h2 className='text-4xl font-bold mt-4'>Add Your Service </h2>
            <form onSubmit={handlePlaceOrder} className='my-3'>
                <input type="text" name='title' placeholder="Type service title" className="input input-bordered input-success w-full max-w-xs my-3" /><br />
                <input type="text" name='imageUrl' placeholder="Type service photo" className="input input-bordered input-success w-full max-w-xs my-3" /><br />
                <input type="text" name='details' placeholder="Type service details" className="input input-bordered input-success w-full max-w-xs my-3" /><br />
                <input type="text" name='price' placeholder="Type service price" className="input input-bordered input-success w-full max-w-xs my-3" /><br />
                <button type='submit' className="btn btn-success">Add Service</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddService;