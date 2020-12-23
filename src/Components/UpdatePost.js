import React, { useEffect, useState } from 'react'
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPost, updatePost } from '../Action/postAction';
import { useHistory, useParams } from "react-router-dom";
const UpdatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log(id)
    const post = useSelector(state => state.post.post)
    console.log(post)
    const loadPost = () => {
        dispatch(getPost(id))
    }
    useEffect(() => {
        loadPost()
    }, [])

    useEffect(()=>{
        if(post){
            setTitle(post.title)
            setBody(post.body)
        }
    },[post])

    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const newObj = {
            id: post.id,
            title,
            body
        }
        console.log(newObj)

        dispatch(updatePost(newObj))
        history.push("/");
    }
    return (
        <div className="container mt-5">
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Body</label>
                    <textarea name=""
                        id="" cols="30"
                        rows="10"
                        className="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}

export default UpdatePost
