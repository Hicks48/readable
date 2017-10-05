import React from 'react'

import CommentForm from './CommentForm'
import CommentsListItem from './CommentsListItem'

class CommentsList extends React.Component {

    render() {
        const { comments } = this.props

        return (
            <div className='container'>
                <CommentForm/>
                <h2>Comments:</h2>
                <div className='basic-margin'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#commentFormModal">
                    New Comment
                </button>
                </div>
                <ul>
                    {comments.filter((comment) => !comment.deleted).map((comment) => (
                        <CommentsListItem key={comment.id} comment={comment}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CommentsList