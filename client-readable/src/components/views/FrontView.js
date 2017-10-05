import React from 'react'

import { connect } from 'react-redux'
import { fetchPosts, fetchCategories, deletePost } from '../../actions'

import FrontPageLink from '../FrontPageLink'
import CategoriesList from '../categories/CategoriesList'
import PostList from '../posts/PostList'

class FrontView extends React.Component {

    componentWillMount() {
        this.props.fetchCategories()
        this.props.fetchPosts()
    }

    render() {
        const { posts, categories, history, deletePost } = this.props
        
        return (
            <div>
                <FrontPageLink/>
                <CategoriesList categories={categories}/>
                <PostList posts={posts} history={history} onDelete={(post) => deletePost(post)}/>
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
      deletePost: (post) => dispatch(deletePost(post))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FrontView);