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

function doPostRequest(resourcePath, data) {
    return fetch(getRequestAddress(resourcePath), getPostRequestHeaders(data)).then((response) => ( response ))
}

function doPutRequest(resourcePath, data) {
    return fetch(getRequestAddress(resourcePath), getPutRequestHeaders(data)).then((response) => ( response.json() ))
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