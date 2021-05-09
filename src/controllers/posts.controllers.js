const mongoose = require('mongoose');
const PostModel = require('../models/postMessage');


const getPosts = async (req, res) => {
    try {
        const postModel = await PostModel.find();
        res.status(200).json(postModel);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}

 const createPost = async (req, res) => {
    const { title, message, creator, tags, selectedFile } = req.body;
    const newPost = new PostModel({ title, message, creator, tags, selectedFile });
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


module.exports = {
    getPosts,
    createPost,
}