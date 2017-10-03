import { FETCH_POSTS, FETCH_POSTS_FOR_CATEGORIES } from '../actions'

export function posts(state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_POSTS_FOR_CATEGORIES:
            return action.posts

        default:
            return state
    }
}