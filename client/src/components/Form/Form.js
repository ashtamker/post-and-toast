import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './formStyle';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({title: '', message: '', tags: '', selectedFile: ''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    
    useEffect(() => {
        if(post) setPostData(post)
        console.log(post)
    }, [post]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId === 0) {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
            clear();
        }
        else {
            dispatch(updatePost(currentId,{ ...postData, name: user?.result?.name }));
            clear();  
        } 
        console.log(postData);
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: ''});
    }

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                  Need to Sign In to share a post  
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Share a picture or recipe</Typography>
            <TextField name="title" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
            <TextField name="message" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
            <TextField name="tags" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})} />
            <div className={classes.fileInput}>
            <FileBase
             type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
            />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" type="submit" fullWidth onClick={clear}>Clear</Button>
            
        </form>
        </Paper>
    )
}

export default Form;