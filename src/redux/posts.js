import axiosURL from './../api/rest'

//action

export let getPosts = (posts) => {

    return {
        type: 'GET_POSTS',
        posts
    }
}


export let thunkActionCreator = (count) => {
    return (dispatch) => {
        return axiosURL.getPosts(count).
            then(data => dispatch(getPosts(data)))
    }
}


//inisialState

let inisialState = []





//reducer 

let Posts = (state = inisialState, action) => {
    switch (action.type) {
        case 'GET_POSTS': return [
            ...state,
            ...action.posts
        ]
        default: return state
    }
}

export default Posts