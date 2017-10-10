import React from 'react'

import CommentForm from './CommentForm'
import CommentsListItem from './CommentsListItem'

import { generateUUID } from '../../utils/uuid'

class CommentsList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            comment: null
        }
    }

    onModalOpen = () => {
        this.setState({ modalVisible: true })
    }

    onModalClose = () => {
        this.setState({ modalVisible: false })
    }

    onCommentEdit = (comment) => {
        this.setState({ ...this.state, comment, modalVisible: true })
    }

    onCommentSubmit = (comment) => {
        const { createComment, editComment, parentPost } = this.props

        const isNewComment = !comment.id
        if (isNewComment) {
            comment.id = generateUUID()
        }

        comment.parentId = parentPost.id

        comment.timestamp = Date.now()

        comment.deleted = false
        comment.parentDeleted = false

        console.log(isNewComment)
        isNewComment ? createComment(comment) : editComment(comment)
    }

    render() {
        const { comments, deleteComment, upVoteComment, downVoteComment } = this.props
        const { modalVisible, comment } = this.state

        return (
            <div className='container'>
                <CommentForm
                    modalVisible={modalVisible} 
                    comment={comment} 
                    onCommentSubmit={this.onCommentSubmit}
                    onClose={this.onModalClose}
                />
                <h2>Comments:</h2>
                <div className='basic-margin'>
                <button type="button" className="btn btn-primary" onClick={this.onModalOpen}>
                    New Comment
                </button>
                </div>
                <ul>
                    {comments.filter((comment) => !comment.deleted)
                        .sort((comment1, comment2) => comment2.voteScore - comment1.voteScore)
                        .map((comment) => (
                            <CommentsListItem 
                                key={comment.id} 
                                comment={comment}
                                onCommentEdit={this.onCommentEdit}
                                onCommentDelete={deleteComment}
                                onUpVote={upVoteComment}
                                onDownVote={downVoteComment}
                            />
                    ))}
                </ul>
            </div>
        )
    }
}

export default CommentsList