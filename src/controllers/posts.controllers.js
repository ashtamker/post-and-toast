const mongoose = require('mongoose');
const PostModel = require('../models/postMessage');



const getPosts = async (req, res) => {
    const {page} = req.query;
    try {
        const LIMIT = 8;
        const startPoint = (Number(page) - 1) * LIMIT;
        const total = await PostModel.countDocuments({});

        const posts = await PostModel.find().sort({_id: -1}).limit(LIMIT).skip(startPoint);
        res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}

const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostModel.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getSearchPosts = async (req, res) => {
        const {searchQuery} = req.query;

        try {
            const title = new RegExp(searchQuery, "i"); 
            const posts = await PostModel.find({$or: [{title}, {tags: {$in: tags.split(',')}}]});
            res.json({data: posts});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostModel({...post, creator: req.userId, createdAt: new Date().toISOString() });

    try {
        await newPost.save();
        res.status(201).json(newPost );
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const updatePost = async (req, res) => {
    const {id} = req.params;
    const { title, message, creator, selectedFile, tags} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No ID that match to a post");
    
   const updatePost = { creator, title, message, selectedFile, tags, _id: id}
   await PostModel.findByIdAndUpdate(id, updatePost, {new: true});
    res.json(updatePost);
}

const deletePost = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No ID that match to a post");

    await PostModel.findByIdAndDelete(id);
    res.json({message: 'Post deleted'});
}

const likePost = async (req, res) => {
    const {id} = req.params;
    if(!req.userId) return res.json({message: "user not verified"})

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No ID that match to a post");

    const post = await PostModel.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if(index === -1) {
        post.likes.push(req.userId);
    }
    else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostModel.findByIdAndUpdate(id, post, {new: true}); 
    res.status(200).json(updatedPost);
}


module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    getSearchPosts,
    getPost,
}

