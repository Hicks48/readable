import React from 'react'

import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from '../../actions'

import CategoriesList from '../categories/CategoriesList'
import PostList from '../posts/PostList'

class FrontView extends React.Component {

    componentWillMount() {
        this.props.fetchCategories()
        this.props.fetchPosts()
    }

    render() {
        const { posts, categories } = this.props
        
        return (
            <div>
                <h1>Readable App</h1>
                <CategoriesList categories={categories}/>
                <PostList posts={posts}/>
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
      fetchPosts: () => dispatch(fetchPosts())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FrontView);