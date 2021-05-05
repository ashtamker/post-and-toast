import React, { useState } from 'react';
// import FileBase from 'react-file-base64';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const handleSubmit = () => {

    }

    return (
        <div>
        <form autoComplete="off" noValidate className="main-form" onSubmit={handleSubmit}>
            <h5>Share a picture or recipe</h5>
            <input name="creator" label="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}></input>
            <input name="title" label="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}></input>
            <input name="message" label="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}></input>
            <input name="tags" label="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})}></input>
            {/* <FileBase
            type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
            /> */}
        </form>
        </div>
    )
}

export default Form;