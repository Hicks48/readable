import React from 'react'

import TimestampSpan from '../common/TimestampSpan'

class CommentsListItem extends React.Component {

    render() {
        const { comment, onCommentDelete, onCommentEdit } = this.props

        return (
            <li className='list-group-item'>
                <div>Comment by: {comment.author} at <TimestampSpan timestamp={comment.timestamp}/></div>
                <div>Votes: {comment.voteScore}</div>
                <div>{comment.body}</div>
                <div>
                    <button 
                        className='btn btn-danger side-margin'
                        onClick={() => onCommentDelete(comment)}
                    >
                            Delete
                    </button>
                    <button 
                        className='btn btn-warning side-margin'
                        onClick={() => onCommentEdit(comment)}
                    >
                        Edit
                    </button>
                </div>
            </li>
        )
    }
}

export default CommentsListItem