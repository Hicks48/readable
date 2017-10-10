import { 
    FETCH_POSTS,
    FETCH_POSTS_FOR_CATEGORIES,
    DELETE_POST,
    UP_VOTE_POST,
    DOWN_VOTE_POST
} from '../actions'

export function posts(state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_POSTS_FOR_CATEGORIES:
            return action.posts

        case UP_VOTE_POST:
        case DOWN_VOTE_POST:
            const votedPost = action.post
            return state.map((post) => (
                post.id === votedPost.id ? votedPost : post
            ))

        case DELETE_POST:
            const deletedPost = action.post
            return state.map((post) => (
                post.id === deletedPost.id ? deletedPost : post
            ))

        default:
            return state
    }
}