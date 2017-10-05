import { FETCH_POSTS, FETCH_POSTS_FOR_CATEGORIES, DELETE_POST } from '../actions'

export function posts(state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_POSTS_FOR_CATEGORIES:
            return action.posts

        case DELETE_POST:
            const deletedPost = action.post
            return state.map((post) => (
                post.id === deletedPost.id ? deletedPost : post
            ))

        default:
            return state
    }
}