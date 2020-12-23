import { GET_POSTS, GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST } from "../Action/types";

const initialState = {
    posts: [],
    post: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload
            }

        case CREATE_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
                }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => post.id == action.payload.id ? action.payload : post)
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id != action.payload)
            }

        default:
            return state
    }
}

