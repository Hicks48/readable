import { combineReducers } from 'redux';

import { posts } from './reducerPosts'
import { categories } from './reducerCategories'
import { selectedPost } from './reducerSelectedPost'

export default combineReducers({
    posts,
    categories,
    selectedPost
})
