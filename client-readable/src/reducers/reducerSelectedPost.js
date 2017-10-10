import { 
    FETCH_POST_DETAILS,
    FETCH_COMMENTS_FOR_POST,
    CLEAR_SELECTED_POST,
    CREATE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT
} from '../actions'

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

        case CLEAR_SELECTED_POST:
            return defaultState

        case CREATE_COMMENT:
            return { ...state, comments: [ ...state.comments, action.comment ] }

        case EDIT_COMMENT:
            const editedComment = action.comment
            return { ...state, comments: state.comments.map((comment) => (
                comment.id === editedComment.id ? editedComment : comment
            )) }

        case DELETE_COMMENT:
            const deletedComment = action.comment
            return { ...state, comments: state.comments.map((comment) => (
                comment.id === deletedComment.id ? deletedComment : comment
            )) }

        case UP_VOTE_COMMENT:
        case DOWN_VOTE_COMMENT:
            const votedComment = action.comment
            return { ...state, comments: state.comments.map((comment) => (
                comment.id === votedComment.id ? votedComment : comment
            )) }

        default:
            return state
    }
}