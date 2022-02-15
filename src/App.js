import React from 'react'
import './App.css';
import { Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/home'
import SearchResult from './components/search-result'
import Explore from './components/explore'
import Discover from './components/discover'
import Video from './components/video'
import Account from './components/account'
import Join from './components/join'
import Login from './components/login'
import NotFound from './components/not-found'
import Logout from './components/logout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

class App extends React.Component {

  render(){
    return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/search-result/:query?" component={ SearchResult } />
        <Route path="/explore/" component={ Explore } />
        <Route path="/discover/:id?" component={ Discover } />
        <Route path="/videos/" component={ Video } />
        <Route path="/account/" component={ Account } />
        <Route path="/join/" component={ Join } />
        <Route path="/login/" component={ Login } />
        <Route path="/not-found" component={ NotFound } />
        <Route path="/logout" component={ Logout } />
        <Redirect to='/not-found' />
      </Switch>
    </div>
  )
  }
  
}

export default App;
