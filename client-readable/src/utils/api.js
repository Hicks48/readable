const SERVICE_URL = 'http://localhost'
const SERVICE_PORT = 3001

export function fetchPosts() {
    return doGetRequest('posts')
}

export function fetchCategories() {
    return doGetRequest('categories')
}

export function fetchCommentsForPost(postId) {
    return doGetRequest(`posts/${postId}/comments`)
}

export function fetchPostsForCategory(category) {
    return doGetRequest(`${category}/posts`)
}

export function fetchPostDetails(postId) {
    return doGetRequest(`posts/${postId}`)
}

export function postNewPost(post) {
    return doPostRequest(`posts`, post)
}

export function putEditPost(post) {
    return doPutRequest(`posts/${post.id}`, post)
}

export function deletePost(post) {
    return doDeleteRequest(`posts/${post.id}`, {})
}

export function postComment(comment) {
    return doPostRequest('comments', comment)
}

export function putComment(comment) {
    return doPutRequest('comments', comment)
}

export function deleteComment(comment) {
    return doDeleteRequest(`comments/${comment.id}`, {})
}

function doPostRequest(resourcePath, data) {
    return fetch(getRequestAddress(resourcePath), getPostRequestHeaders(data)).then((response) => ( response.json() ))
}

function doPutRequest(resourcePath, data) {
    return fetch(getRequestAddress(resourcePath), getPutRequestHeaders(data)).then((response) => ( response.json() ))
}

function doDeleteRequest(resourcePath, data) {
    return fetch(getRequestAddress(resourcePath), getDeleteRequestHeaders(data)).then((response) => ( response.json() ))
}

function doGetRequest(resourcePath) {
    return fetch(getRequestAddress(resourcePath), getGetRequestHeader()).then((response) => ( response.json() ))
}

function getRequestAddress(resourcePath) {
    return `${SERVICE_URL}:${SERVICE_PORT}/${resourcePath}`
}

function getPostRequestHeaders(data) {
    return getGeneralRequestHeader('post', data)
}

function getPutRequestHeaders(data) {
    return getGeneralRequestHeader('put', data)
}

function getDeleteRequestHeaders(data) {
    return getGeneralRequestHeader('delete', data)
}

function getGetRequestHeader() {
    return { headers: { 'Authorization': 'whatever-you-want' } }
}

function getGeneralRequestHeader(method, data) {
    return {
        method: method,
        headers: {
            'Authorization': 'whatever-you-want',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}