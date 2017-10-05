import React from 'react'

import { Link } from 'react-router-dom'

import PostListItem from './PostListItem'

class PostList extends React.Component {

    onPostSelect = (post) => {
        const { history } = this.props
        history.push(`/post/${post.id}`)
    }

    render() {
        const { posts, onDelete } = this.props

        return (
            <div className='container'>
                <h2>Posts:</h2>
                <div className='basic-margin'>
                    <Link to='post/editornew/new' className='btn btn-success'>Create New Post</Link>
                </div>
                <ol className='list-group'>
                    {posts.filter((post) => !post.deleted).map((post) => (
                        <PostListItem key={post.id} post={post} onPostSelect={this.onPostSelect} onDelete={onDelete}/>
                    ))}
                </ol>
            </div>
        )
    }
}

export default PostList