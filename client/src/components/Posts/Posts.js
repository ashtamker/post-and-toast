import React from 'react';
import Post from './post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return (
        <div>
            <h1>posts</h1>
            <Post />
            <Post />
        </div>
    )
}

export default Posts;