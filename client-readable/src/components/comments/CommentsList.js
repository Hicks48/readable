import React from 'react'

import CommentsListItem from './CommentsListItem'

class CommentsList extends React.Component {

    render() {
        const { comments } = this.props

        return (
            <ul>
                {comments.map((comment) => (
                    <CommentsListItem key={comment.id} comment={comment}/>
                ))}
            </ul>
        )
    }
}

export default CommentsList