import React from 'react'

import { connect } from 'react-redux'
import { 
    fetchPosts,
    fetchCategories, 
    deletePost,
    upVotePost,
    downVotePost
} from '../../actions'

import CategoriesList from '../categories/CategoriesList'
import PostList from '../posts/PostList'

class FrontView extends React.Component {

    componentWillMount() {
        this.props.fetchCategories()
        this.props.fetchPosts()
    }

    render() {
        const { posts, categories,
                history, deletePost,
                downVote, upVote } = this.props
        
        return (
            <div>
                <CategoriesList categories={categories}/>
                <PostList 
                    posts={posts} 
                    history={history} 
                    onDelete={(post) => deletePost(post)}
                    onUpVote={upVote}
                    onDownVote={downVote}
                />
            </div>
        )
    }
}

function mapStateToProps({ posts, categories }) {
    return {
      posts,
      categories
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      fetchCategories: () => dispatch(fetchCategories()),
      fetchPosts: () => dispatch(fetchPosts()),
      deletePost: (post) => dispatch(deletePost(post)),
      upVote: (post) => dispatch(upVotePost(post)),
      downVote: (post) => dispatch(downVotePost(post))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FrontView);