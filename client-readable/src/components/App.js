import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FrontView from './views/FrontView'
import CategoryView from './views/CategoryView'
import PostDetailView from './views/PostDetailView'
import PostCreateEditView from './views/PostCreateEditView'
import NotFoundView from './views/NotFoundView'

class App extends React.Component {
  
  render() {

    return (
      <Switch>
        <Route exact path='/' component={FrontView}></Route>
        <Route exact path='/notfound' component={NotFoundView}></Route>
        <Route exact path='/post/editornew/:id' component={PostCreateEditView}></Route>
        <Route exact path='/:category' component={CategoryView}></Route>
        <Route exact path='/:category/:post_id' component={PostDetailView}></Route>
        <Route exact path='*' component={NotFoundView}></Route>
      </Switch>
    )
  }
}

export default App