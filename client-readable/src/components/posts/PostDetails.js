import React from 'react'
import { Link } from 'react-router-dom'

import TimestampSpan from '../common/TimestampSpan'

class PostDetails extends React.Component {

    render() {
        const { postDetails, onDelete } = this.props
        
        if (!postDetails) {
            return (<div></div>)
        }

        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>{postDetails.title}</h4>
                        <h6 className='card-subtitle mb-2'>by {postDetails.author} at <TimestampSpan timestamp={postDetails.timestamp}/></h6>
                        <h6 className='card-subtitle mb-2'>vote score: {postDetails.voteScore}</h6>
                        <p className='card-text'>{postDetails.body}</p>
                        <Link to={`/post/editornew/${postDetails.id}`} className='card-link btn btn-warning'>Edit</Link>
                        <button 
                            type='button'
                            className='card-link btn btn-danger'
                            onClick={() => onDelete(postDetails)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails