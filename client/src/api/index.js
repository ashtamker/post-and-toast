import axios from 'axios';


const URL = axios.create({ baseURL: 'http://localhost:8000'});

export const fetchPosts = () => URL.get('/posts');
export const createPost = (newPost) => URL.post('/posts', newPost);
export const updatePost = (id, updatedPost) => URL.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => URL.delete(`/posts/${id}`);
export const likePost = (id) => URL.patch(`/posts/${id}/likePost`);
export const signIn = (formData) => URL.post('/user/signin', formData); 
export const signUp = (formData) => URL.post('/user/signup', formData);