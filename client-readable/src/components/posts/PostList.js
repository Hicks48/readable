import React from 'react'

import { Link } from 'react-router-dom'

import PostListItem from './PostListItem'

class PostList extends React.Component {

    sortMethods = {
        highestScore: (post1, post2) => post2.voteScore - post1.voteScore,
        lowestScore: (post1, post2) => post1.voteScore - post2.voteScore,
        time: (post1, post2) => post2.timestamp - post1.timestamp
    }

    constructor(props) {
        super(props)

        this.state = {
            sortMethod: this.sortMethods.highestScore,
            posts: this.props.posts
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, posts: nextProps.posts })
    }

    onSortMethodSelected = (event) => {
        this.setState({ ...this.state, sortMethod: this.sortMethods[event.target.value] })
    }

    onPostSelect = (post) => {
        const { history } = this.props
        history.push(`/post/${post.id}`)
    }

    render() {
        let { posts, sortMethod } = this.state
        const { onDelete } = this.props

        posts = posts.sort(sortMethod)

        return (
            <div className='container'>
                <h2>Posts:</h2>
                <div className='basic-margin'>
                    <Link to='/post/editornew/new' className='btn btn-success'>Create New Post</Link>
                </div>
                <div className='basic-margin'>
                    <label className='side-margin'>Sort by:</label>
                    <select selected='highestScore' onChange={this.onSortMethodSelected}>
                        <option value='highestScore'>Highest Vote Score First</option>
                        <option value='lowestScore'>Lowest Vote Score First</option>
                        <option value='time'>Newest First</option>
                    </select>
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