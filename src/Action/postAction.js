import axios from "axios";
import {GET_POSTS, GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST } from "./types";

export const getPosts = () => async(dispatch) =>{
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(result)
    dispatch({
        type: GET_POSTS,
        payload: result.data
    })
}

export const getPost = (id) => async(dispatch) =>{
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(result)
    dispatch({
        type: GET_POST,
        payload: result.data
    })
}

export const createPost = (post) => async(dispatch) =>{
    const result = await axios.post("https://jsonplaceholder.typicode.com/posts",post);
    console.log(result)
    dispatch({
        type: CREATE_POST,
        payload: result.data
    })
}

export const updatePost = (post) => async(dispatch) =>{
    const result = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
    console.log(result)
    dispatch({
        type: UPDATE_POST,
        payload: result.data
    })
}

export const deletePost = (id) => async(dispatch) =>{
    const result = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(result)
    dispatch({
        type: DELETE_POST,
        payload: id
    })
}