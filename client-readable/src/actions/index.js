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
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'

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

const receiveCreateComment = (comment) => ({
    type: CREATE_COMMENT,
    comment
})

export const createComment = (comment) => (dispatch) => {
    API.postComment(comment).then(responseComment => dispatch(receiveCreateComment(responseComment)))
}

const receiveEditComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})

export const editComment = (comment) => (dispatch) => {
    API.putComment(comment).then(responseComment => dispatch(receiveEditComment(responseComment)))
}

const receiveDeleteComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

export const deleteComment = (comment) => (dispatch) => {
    API.deleteComment(comment).then(responseComment => dispatch(receiveDeleteComment(responseComment)))
}

const receiveUpVote = (post) => ({
    type: UP_VOTE_POST,
    post
})

const receiveDownVote = (post) => ({
    type: DOWN_VOTE_POST,
    post
})

export const upVotePost = (post) => (dispatch) => {
    API.votePost(post, 'upVote').then(responsePost => dispatch(receiveUpVote(responsePost)))
}

export const downVotePost = (post) => (dispatch) => {
    API.votePost(post, 'downVote').then(responsePost => dispatch(receiveDownVote(responsePost)))
}

const receiveCommentUpVote = (comment) => ({
    type: UP_VOTE_COMMENT,
    comment
})

const receiveCommentDownVote = (comment) => ({
    type: DOWN_VOTE_COMMENT,
    comment
})

export const downVoteComment = (comment) => (dispatch) => {
    API.voteComment(comment, 'downVote').then(responseComment => dispatch(receiveCommentDownVote(responseComment)))
}

export const upVoteComment = (comment) => (dispatch) => {
    API.voteComment(comment, 'upVote').then(responseComment => dispatch(receiveCommentUpVote(responseComment)))
}