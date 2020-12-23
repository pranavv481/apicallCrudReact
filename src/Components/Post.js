import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getPost } from '../Action/postAction';
const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.post)
  console.log(post)
  useEffect(() => {
    loadPost()
  }, [])
 
  const loadPost = () => {
    dispatch(getPost(id))
  }
 
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post?post.title:""}</h5>
          <p className="card-text">{post?post.body:""}</p>
         </div>
      </div>
    </div>
  )
}

export default Post
