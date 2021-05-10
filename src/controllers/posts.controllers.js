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
    // const { title, message, creator, tags, selectedFile } = req.body;
    // const newPost = new PostModel({ title, message, creator, tags, selectedFile })
    const {post} = req.body;
    const newPost = new PostModel(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const updatePost = async (req, res) => {
    const {id : _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No ID that match to a post");
    
   const updatePost = PostModel.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatePost);
}

const deletePost = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No ID that match to a post");

    await PostModel.findByIdAndDelete(id);
    console.log('Delete');
    res.json({message: 'Post deleted'});
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
}