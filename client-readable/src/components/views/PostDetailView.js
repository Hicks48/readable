import React from 'react'

import { connect } from 'react-redux'
import { fetchPostDetails, fetchCommentsForPost } from '../../actions'

import PostDetails from '../posts/PostDetails'
import CommentsList from '../comments/CommentsList'

class PostDetailView extends React.Component {

    componentWillMount() {
        const postId = this.props.match.params.id

        this.props.fetchPostDetails(postId)
        this.props.fetchCommentsForPost(postId)
    }

    render() {
        const { postDetails, comments } = this.props.selectedPost

        return (
            <div>
                <h1>Post Details</h1>
                <PostDetails postDetails={postDetails}/>
                <CommentsList comments={comments}/>
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
        fetchCommentsForPost: (postId) => dispatch(fetchCommentsForPost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailView)