import React from 'react'

import { Link } from 'react-router-dom'

class PostListItem extends React.Component {

    render() {
        const { post, onPostSelect } = this.props

        return (
            <li className='list-group-item'>
                <div className='card posts-list-item' onClick={() => onPostSelect(post)}>
                    <div className='card-body'>
                        <h4 className='card-title'>{post.title}</h4>
                        <h6 className='card-subtitle mb-2'>by {post.author} at {post.timestamp}</h6>
                        <h6 className='card-subtitle mb-2'>category: {post.category}</h6>
                        <Link to={`post/editornew/${post.id}`} className='card-link btn btn-warning'>Edit</Link>
                        <button type='button' className='card-link btn btn-danger'>Delete</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default PostListItem