import React from 'react'

import TimestampSpan from '../common/TimestampSpan'

class CommentsListItem extends React.Component {

    render() {
        const { comment, onCommentDelete, onCommentEdit,
                onUpVote, onDownVote } = this.props

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
                    <button 
                        type='button' 
                        className='card-link btn btn-info icon-large'
                        onClick={() => onUpVote(comment)}
                    >
                        <i className='ion-thumbsup'></i>
                    </button>
                    <button 
                        type='button' 
                        className='card-link btn btn-basic icon-large'
                        onClick={() => onDownVote(comment)}
                    >
                        <i className='ion-thumbsdown'></i>
                    </button>
                </div>
            </li>
        )
    }
}

export default CommentsListItem