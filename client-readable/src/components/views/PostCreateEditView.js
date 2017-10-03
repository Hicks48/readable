import React from 'react'

import PostForm from '../posts/PostForm'

import { connect } from 'react-redux'

class PostCreateEditView extends React.Component {

    getEmptyPost() {
        return {
            title: '',
            category: '',
            author: '',
            body: ''
        }
    }

    render() {
        return (
            <div>
                <h1>PostCreateEditView</h1>
                <PostForm post={this.getEmptyPost()}/>
            </div>
        )
    }
}

export default connect()(PostCreateEditView)