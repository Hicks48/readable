import { 
    FETCH_POSTS,
    FETCH_POSTS_FOR_CATEGORIES,
    DELETE_POST,
    UP_VOTE_POST,
    DOWN_VOTE_POST,
    FETCH_COMMENT_COUNT_FOR_POST
} from '../actions'

export function posts(state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_POSTS_FOR_CATEGORIES:
            return action.posts

        case FETCH_COMMENT_COUNT_FOR_POST:
            const commentCount = action.commentCount
            const postWithCommentCount = action.post

            const newPosts = [ ...state ]
            newPosts.map(post => {
                if (post.id === postWithCommentCount.id) post.commentCount = commentCount
                return post
            })
            return newPosts

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