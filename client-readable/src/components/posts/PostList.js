import React from 'react'

import { Link } from 'react-router-dom'

import PostListItem from './PostListItem'

class PostList extends React.Component {

    render() {
        const { posts } = this.props

        return (
            <div className='container'>
                <h2>Posts:</h2>
                <div className='basic-margin'>
                    <Link to='post/editornew/new' className='btn btn-success'>Create New Post</Link>
                </div>
                <ol className='list-group'>
                    {posts.map((post) => (
                        <PostListItem key={post.id} post={post}/>
                    ))}
                </ol>
            </div>
        )
    }
}

export default PostList