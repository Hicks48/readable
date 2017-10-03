import React from 'react'

class PostDetails extends React.Component {

    render() {
        const { postDetails } = this.props
        
        if (!postDetails) {
            return (<div></div>)
        }

        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>{postDetails.title}</h4>
                        <h6 className='card-subtitle mb-2'>by {postDetails.author} at {postDetails.timestamp}</h6>
                        <h6 className='card-subtitle mb-2'>vote score: {postDetails.voteScore}</h6>
                        <p className='card-text'>{postDetails.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails