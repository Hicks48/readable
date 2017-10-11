import React from 'react'

import { connect } from 'react-redux'
import { fetchPostsForCategory, deletePost, upVotePost, downVotePost } from '../../actions'

import PostList from '../posts/PostList'

class CategoryView extends React.Component {

    componentWillMount() {
        const category = this.getCategory()
        this.props.fetchPostsForCategory(category)
    }

    render() {
        const { posts, history, deletePost, upVotePost, downVotePost } = this.props

        return (
            <div>
                <h1>Category {this.getCategory()}</h1>
                <PostList 
                    posts={posts}
                    history={history} 
                    onDelete={(post) => deletePost(post)}
                    onUpVote={upVotePost}
                    onDownVote={downVotePost}
                />
            </div>
        )
    }

    getCategory = () => (
        this.props.match.params.category
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
        deletePost: (post) => dispatch(deletePost(post)),
        upVotePost: (post) => dispatch(upVotePost(post)),
        downVotePost: (post) => dispatch(downVotePost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)