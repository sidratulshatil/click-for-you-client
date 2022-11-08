import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const reviews = useLoaderData()
    return (
        <div>
            <h2>{reviews.length}</h2>
        </div>
    );
};

export default Blog;