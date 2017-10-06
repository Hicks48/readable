import React from 'react'

import { connect } from 'react-redux'
import { fetchPostsForCategory, deletePost } from '../../actions'

import FrontPageLink from '../FrontPageLink'
import PostList from '../posts/PostList'

class CategoryView extends React.Component {

    componentWillMount() {
        const category = this.props.match.params.name
        this.props.fetchPostsForCategory(category)
    }

    render() {
        const { posts, history, deletePost } = this.props

        return (
            <div>
                <FrontPageLink/>
                <h1>Category {this.getCategory()}</h1>
                <PostList posts={posts} history={history} onDelete={(post) => deletePost(post)}/>
            </div>
        )
    }

    getCategory = () => (
        this.props.match.params.name
    )
}

function mapStateToProps({ posts }) {
    return {
        posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostsForCategory: (category) => dispatch(fetchPostsForCategory(category)),
        deletePost: (post) => dispatch(deletePost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)