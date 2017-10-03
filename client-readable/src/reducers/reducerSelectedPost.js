import { FETCH_POST_DETAILS, FETCH_COMMENTS_FOR_POST } from '../actions'

const defaultState = {
    postDetails: null,
    comments: []
}

export function selectedPost(state = defaultState, action) {

    switch (action.type) {
        case FETCH_POST_DETAILS:
            return { ...state, postDetails: action.postDetails }

        case FETCH_COMMENTS_FOR_POST:
            return { ...state, comments: action.comments }

        default:
            return state
    }
}