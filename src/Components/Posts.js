import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, getPosts } from '../Action/postAction';
const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    console.log(posts)
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts ? posts.map(post => (
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <Link to={`/post/${post.id}`} className="btn btn-primary">View</Link>
                                <Link to={`/updatepost/${post.id}`} className="btn btn-warning">Update</Link>
                                <button className="btn btn-danger" onClick={()=>dispatch(deletePost(post.id))}>Delete</button>
                            </td>
                        </tr>
                    )) : <h1>Loading...</h1>}
                </tbody>
            </table>
        </div>

    )
}

export default Posts
