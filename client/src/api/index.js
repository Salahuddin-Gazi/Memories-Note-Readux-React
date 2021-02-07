import axios from "axios";
const url_post = "http://localhost:5000/posts/post";
const url_get = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url_get);
export const createPost = (newPost) => axios.post(url_post, newPost);
