import React from 'react/addons';
import Home from './components/Home/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'font-awesome/css/font-awesome.min.css';
import { Router, Route, IndexRoute } from 'react-router';
import './reset.scss';
import pageEnum from './constant/pageName';

injectTapEventPlugin();

class About extends React.Component{
  render(){
    return (<h1>Home</h1>);
  }
}

class TechNotes extends React.Component{
  render(){
    return (<h1>TechNotes</h1>);
  }
}

class Articles extends React.Component{
  render(){
    return (<h1>Articles</h1>);
  }
}

class Me extends React.Component{
  render(){
    return (<h1>Me</h1>);
  }
}

React.render((
  <Router>
    <Route path="/" component={Home}>
      <IndexRoute component={About} />
      <Route path={pageEnum.HOME} component={About} />
      <Route path={pageEnum.TECHNOTES} component={TechNotes} />
      <Route path={pageEnum.ARTICLES} component={Articles} />
      <Route path={pageEnum.ME} component={Me} />
    </Route>
  </Router>
), document.querySelector('#app'));
