import * as API from '../utils/api'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS_FOR_CATEGORIES = 'FETCH_POSTS_FOR_CATEGORIES'
export const FETCH_COMMENTS_FOR_POST = 'FETCH_COMMENTS_FOR_POST'
export const FETCH_POST_DETAILS = 'FETCH_POST_DETAILS'
export const CREATE_OR_EDIT_POST = 'CREATE_OR_EDIT_POST'
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

const receiveNewOrEditPost = (post) => ({
    type: CREATE_OR_EDIT_POST,
    post
})

export const createNewOrEditPost = (post) => (dispatch) => {
    if (post.id) {
        API.putEditPost(post).then(responsePost => dispatch(receiveNewOrEditPost(responsePost)))
    } else {
        API.postNewPost(post).then(responsePost => dispatch(receiveNewOrEditPost(responsePost)))
    }
}