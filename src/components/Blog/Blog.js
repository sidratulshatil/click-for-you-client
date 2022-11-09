import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const Blog = () => {

    useTitle('Blog')
    return (
        <div>
            <h2>blog</h2>
        </div>
    );
};

export default Blog;