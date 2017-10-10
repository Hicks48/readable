import React from 'react'

import { Link } from 'react-router-dom'

import TimestampSpan from '../common/TimestampSpan'

class PostListItem extends React.Component {

    onPostClick = (event, post) => {
        const {onPostSelect} = this.props
        const elementType = event.target.tagName

        if (elementType !== 'A' && elementType !== 'BUTTON' && elementType !== 'I') {
            onPostSelect(post)   
        }
    }

    render() {
        const { post, onDelete, onUpVote, onDownVote } = this.props

        return (
            <li className='list-group-item'>
                <div className='card posts-list-item' onClick={(event) => this.onPostClick(event, post)}>
                    <div className='card-body'>
                        <h4 className='card-title'>{post.title}</h4>
                        <h6 className='card-subtitle mb-2'>by {post.author} at <TimestampSpan timestamp={post.timestamp}/></h6>
                        <h6 className='card-subtitle mb-2'>category: {post.category}</h6>
                        <h6 className='card-subtitle mb-2'>score: {post.voteScore}</h6>
                        <Link to={`/post/editornew/${post.id}`} className='card-link btn btn-warning'>Edit</Link>
                        <button 
                            type='button'
                            className='card-link btn btn-danger'
                            onClick={() => onDelete(post)}
                        >
                            Delete
                        </button>
                        <button 
                            type='button' 
                            className='card-link btn btn-info icon-large'
                            onClick={() => onUpVote(post)}
                        >
                            <i className='ion-thumbsup'></i>
                        </button>
                        <button 
                            type='button' 
                            className='card-link btn btn-basic icon-large'
                            onClick={() => onDownVote(post)}
                        >
                            <i className='ion-thumbsdown'></i>
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default PostListItem