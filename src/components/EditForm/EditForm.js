import { useState } from "react"
import { Form } from "react-bootstrap"
import { useLoaderData } from "react-router-dom"


const EditForm = () => {
    const data = useLoaderData()
    const [user, setUser] = useState(data)
    // console.log(data)
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
    return (

        <div >
            <h2>Review name: {data.title}</h2>
            <Form onSubmit={handleUpdate}>
                <input onChange={handleInputChange} defaultValue={data.comment} type="text" name='name' placeholder='name' required /><br />
                <button type='submit' className="btn btn-sm">Edit Review</button>

            </Form>
        </div>

    )
}

export default EditForm;