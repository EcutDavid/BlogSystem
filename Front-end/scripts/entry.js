import React from 'react/addons';
import Home from './components/Home/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'font-awesome/css/font-awesome.min.css';
import { Router, Route, IndexRoute } from 'react-router';
import './reset.scss';

injectTapEventPlugin();

class About extends React.Component{
  render(){
    return (<h1>About</h1>);
  }
}

class Inbox extends React.Component{
  render(){
    return (<h1>Inbox</h1>);
  }
}

React.render((
  <Router>
    <Route path="/" component={Home}>
      <IndexRoute component={About} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.querySelector('#app'));
