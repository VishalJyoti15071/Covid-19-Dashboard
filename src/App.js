import {Route, Redirect, Switch} from 'react-router-dom'
import './App.css'
import HomeRoute from './components/HomeRoute'
import StateSpecificRoute from './components/StateSpecificRoute'
import AboutRoute from './components/AboutRoute'
import NotFoundRoute from './components/NotFoundRoute'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route path="/not-found" component={NotFoundRoute} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App

// <Route exact path="/state" component={StateSpecificRoute} />
//   <Route exact path="/about" component={AboutRoute} />
