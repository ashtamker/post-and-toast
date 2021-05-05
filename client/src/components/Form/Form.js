import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import './formStyle.js';

import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <div>
            <h5>Share a picture or recipe</h5>
        <form autoComplete="off" noValidate className="main-form" onSubmit={handleSubmit}>
            
            <input name="creator" label="creator" placeholder="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}></input>
            <input name="title" label="title" placeholder="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}></input>
            <input name="message" label="message" placeholder="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}></input>
            <input name="tags" label="tags" placeholder="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})}></input>
            <div className="main-form">
            <FileBase
            type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
            />
            <button>Submit</button>
            <button onClick={clear}>Clear</button>
            </div>
        </form>
        </div>
    )
}

export default Form;