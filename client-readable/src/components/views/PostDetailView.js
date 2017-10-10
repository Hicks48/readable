import React from 'react'

import { connect } from 'react-redux'
import { 
    fetchPostDetails,
    fetchCommentsForPost,
    deletePost,
    createComment,
    editComment, 
    deleteComment,
    upVotePost,
    downVotePost,
    upVoteComment,
    downVoteComment
} from '../../actions'

import FrontPageLink from '../FrontPageLink'
import PostDetails from '../posts/PostDetails'
import CommentsList from '../comments/CommentsList'

class PostDetailView extends React.Component {

    componentWillMount() {
        const postId = this.props.match.params.post_id

        this.props.fetchPostDetails(postId)
        this.props.fetchCommentsForPost(postId)
    }

    onPostDelete = (postDetails) => {
        const { history, deletePost } = this.props
        deletePost(postDetails)
        history.push('/')
    }

    render() {
        const { createComment, editComment,
                deleteComment, upVoteComment,
                downVoteComment, upVotePost, downVotePost } = this.props

        const { postDetails, comments } = this.props.selectedPost

        return (
            <div>
                <FrontPageLink/>
                <h1>Post Details</h1>
                <PostDetails 
                    postDetails={postDetails} 
                    onDelete={this.onPostDelete}
                    upVotePost={upVotePost}
                    downVotePost={downVotePost}
                />
                <CommentsList
                    comments={comments}
                    createComment={createComment}
                    editComment={editComment}
                    deleteComment={deleteComment}
                    upVoteComment={upVoteComment}
                    downVoteComment={downVoteComment}
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
        deletePost: (post) => dispatch(deletePost(post)),
        createComment: (comment) => dispatch(createComment(comment)),
        editComment: (comment) => dispatch(editComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        upVotePost: (post) => dispatch(upVotePost(post)),
        downVotePost: (post) => dispatch(downVotePost(post)),
        upVoteComment: (comment) => dispatch(upVoteComment(comment)),
        downVoteComment: (comment) => dispatch(downVoteComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailView)