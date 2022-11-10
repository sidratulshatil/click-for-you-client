import { useState } from "react"
import { Form } from "react-bootstrap"
import { useLoaderData } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditForm = () => {
    const data = useLoaderData()
    const [user, setUser] = useState(data)
    console.log(user)
    const handleUpdate = (event) => {
        event.preventDefault()
        fetch(`https://click-for-you-server.vercel.app/review/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated')
                }
                console.log(data)
            })
    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }
    // const notify = () => toast("Wow so easy!");
    return (

        <div >
            <h2 className='text-2xl font-bold'>Service name: <span className='service-title'>{data.title}</span></h2>
            <Form onSubmit={handleUpdate}>
                <input className="border my-2 border-double p-7" onChange={handleInputChange} defaultValue={data.comment} type="text" name='comment' required /><br />
                <button type='submit' className="btn btn-sm">Edit Review</button>

            </Form>

        </div>

    )
}

export default EditForm;