import { FETCH_CATEGORIES } from '../actions'

export function categories(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.categories

        default:
            return state
    }
}