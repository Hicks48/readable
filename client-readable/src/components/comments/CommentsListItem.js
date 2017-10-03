import React from 'react'

class CommentsListItem extends React.Component {

    render() {
        const { comment } = this.props

        return (
            <li>{comment.body}</li>
        )
    }
}

export default CommentsListItem