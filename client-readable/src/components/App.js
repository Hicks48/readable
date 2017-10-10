import React from 'react'
import { Route } from 'react-router-dom'

import FrontView from './views/FrontView'
import CategoryView from './views/CategoryView'
import PostDetailView from './views/PostDetailView'
import PostCreateEditView from './views/PostCreateEditView'

class App extends React.Component {
  
  render() {

    return (
      <div>
        <Route exact path='/' component={FrontView}></Route>
        <Route exact path='/post/editornew/:id' component={PostCreateEditView}></Route>
        <Route exact path='/:category' component={CategoryView}></Route>
        <Route exact path='/:category/:post_id' component={PostDetailView}></Route>
      </div>
    )
  }
}

export default App