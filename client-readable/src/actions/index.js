import * as API from '../utils/api'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS_FOR_CATEGORIES = 'FETCH_POSTS_FOR_CATEGORIES'
export const FETCH_COMMENTS_FOR_POST = 'FETCH_COMMENTS_FOR_POST'
export const FETCH_POST_DETAILS = 'FETCH_POST_DETAILS'
export const CLEAR_SELECTED_POST = 'CLEAR_SELECTED_POST'
export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

const receivePosts = (posts) => ({
    type: FETCH_POSTS,
    posts
})

export const fetchPosts = () => (dispatch) => (
    API.fetchPosts().then(posts => dispatch(receivePosts(posts)))
)

const receivePostsForCategory = (posts) => ({
    type: FETCH_POSTS_FOR_CATEGORIES,
    posts
})

export const fetchPostsForCategory = (category) => (dispatch) => (
    API.fetchPostsForCategory(category).then(posts => dispatch(receivePostsForCategory(posts)))
)

const receiveCategories = (categories) => ({
    type: FETCH_CATEGORIES,
    categories
})

export const fetchCategories = () => (dispatch) => (
    API.fetchCategories().then(categoriesObject => dispatch(receiveCategories(categoriesObject.categories)))
)

const receiveCommentsForPost = (comments) => ({
    type: FETCH_COMMENTS_FOR_POST,
    comments
})

export const fetchCommentsForPost = (postId) => (dispatch) => (
    API.fetchCommentsForPost(postId).then(comments => dispatch(receiveCommentsForPost(comments)))
)

const receivePostDetails = (postDetails) => ({
    type: FETCH_POST_DETAILS,
    postDetails
})

export const fetchPostDetails = (postId) => (dispatch) => (
    API.fetchPostDetails(postId).then(postDetails => dispatch(receivePostDetails(postDetails)))
)

export const clearSelectedPost = () => ({
    type: CLEAR_SELECTED_POST
})

const receiveCreatePost = (post) => ({
    type: CREATE_POST,
    post
})

const receiveEditPost = (post) => ({
    type: EDIT_POST,
    post
})

export const createPost = (post) => (dispatch) => {
    API.postNewPost(post).then(responsePost => dispatch(receiveCreatePost(responsePost)))
}

export const editPost = (post) => (dispatch) => {
    API.putEditPost(post).then(responsePost => dispatch(receiveEditPost(responsePost)))
}

const receiveDeletePost = (post) => ({
    type: DELETE_POST,
    post
})

export const deletePost = (post) => (dispatch) => {
    API.deletePost(post).then(responsePost => dispatch(receiveDeletePost(responsePost)))
}