import React from 'react'

import { connect } from 'react-redux'
import { fetchPostDetails, fetchCommentsForPost, createComment, editComment, deleteComment } from '../../actions'

import FrontPageLink from '../FrontPageLink'
import PostDetails from '../posts/PostDetails'
import CommentsList from '../comments/CommentsList'

class PostDetailView extends React.Component {

    componentWillMount() {
        const postId = this.props.match.params.id

        this.props.fetchPostDetails(postId)
        this.props.fetchCommentsForPost(postId)
    }

    render() {
        const { createComment, editComment, deleteComment } = this.props
        const { postDetails, comments } = this.props.selectedPost

        return (
            <div>
                <FrontPageLink/>
                <h1>Post Details</h1>
                <PostDetails postDetails={postDetails}/>
                <CommentsList
                    comments={comments}
                    createComment={createComment}
                    editComment={editComment}
                    deleteComment={deleteComment}
                    parentPost={postDetails}
                />
            </div>
        )
    }
}

function mapStateToProps({ selectedPost }) {
    return {
        selectedPost
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostDetails: (postId) => dispatch(fetchPostDetails(postId)),
        fetchCommentsForPost: (postId) => dispatch(fetchCommentsForPost(postId)),
        createComment: (comment) => dispatch(createComment(comment)),
        editComment: (comment) => dispatch(editComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailView)