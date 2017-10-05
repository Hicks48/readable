import React from 'react'

import TimestampSpan from '../common/TimestampSpan'

class CommentsListItem extends React.Component {

    render() {
        const { comment } = this.props

        return (
            <li className='list-group-item'>
                <div>Comment by: {comment.author} at <TimestampSpan timestamp={comment.timestamp}/></div>
                <div>Votes: {comment.voteScore}</div>
                <div>{comment.body}</div>
                <div>
                    <button className='btn btn-danger side-margin'>Delete</button>
                    <button className='btn btn-warning side-margin'>Edit</button>
                </div>
            </li>
        )
    }
}

export default CommentsListItem