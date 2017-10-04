import React from 'react'

import PostForm from '../posts/PostForm'

import { connect } from 'react-redux'
import { fetchPostDetails, fetchCategories, createPost, editPost, clearSelectedPost } from '../../actions'

import { generateUUID } from '../../utils/uuid'

class PostCreateEditView extends React.Component {

    componentWillMount() {
        const { fetchCategories, fetchPostDetails, clearSelectedPost } = this.props
        const postId = this.props.match.params.id

        clearSelectedPost()
        fetchCategories()
        
        if (postId !== 'new') {
            fetchPostDetails(postId)
        }
    }

    getEmptyPost() {
        return {
            title: '',
            category: '',
            author: '',
            body: ''
        }
    }

    submitPost = (newPost) => {
        const { createPost, editPost } = this.props
        const postId = this.props.match.params.id

        newPost.id = postId !== 'new' ? postId : generateUUID()

        newPost.voteScore = 0
        newPost.deleted = false

        postId === 'new' ? createPost(newPost) : editPost(newPost)
    }

    render() {
        const { selectedPost, categories } = this.props
        const post = selectedPost.postDetails !== null ? selectedPost.postDetails : this.getEmptyPost()

        return (
            <div>
                <h1>PostCreateEditView</h1>
                <PostForm post={post} categories={categories} submitPost={this.submitPost}/>
            </div>
        )
    }
}

function mapStateToProps({ selectedPost, categories }) {
    return {
        selectedPost,
        categories
    }
}

function dispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPostDetails: (postId) => dispatch(fetchPostDetails(postId)),
        createPost: (post) => dispatch(createPost(post)),
        editPost: (post) => dispatch(editPost(post)),
        clearSelectedPost: () => dispatch(clearSelectedPost())
    }
}

export default connect(mapStateToProps, dispatchToProps)(PostCreateEditView)