import React, { useState } from 'react'
import shortid from "shortid";
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from "react-redux";
import { createPost } from '../Action/postAction';
import {useHistory} from "react-router-dom";
const AddPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch(); 
    const history = useHistory();
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const newObj={
            id:parseInt(uuidv4()),
            title,
            body
        }
        console.log(newObj)
        
       dispatch(createPost(newObj))
       setTitle("")
       setBody("")
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

export default AddPost
