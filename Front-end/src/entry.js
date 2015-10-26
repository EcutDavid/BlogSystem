import React from 'react/addons';
import Master from './components/Container/Master';
import BlogTemplate from './components/Container/BlogTemplate';
import Home from './components/Container/Home';
import TechNotes from './components/Container/TechNotes';
import Articles from './components/Container/Articles';
import Me from './components/Container/Me';

import pageEnum from './constant/pageName';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';

import injectTapEventPlugin from 'react-tap-event-plugin';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';

import 'font-awesome/css/font-awesome.min.css';
import './reset.scss';

injectTapEventPlugin();

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  }

  getChildContext(){
    return {
      muiTheme: this.state.muiTheme
    };
  }

  render(){
    return (
      <Router>
        <Route path="/" component={Master}>
          <IndexRoute component={Home} />
          <Route path={pageEnum.HOME} component={Home} />
          <Route path={pageEnum.TECHNOTES} component={TechNotes} />
          <Route path={pageEnum.ARTICLES} component={Articles} />
          <Route path={`${pageEnum.ARTICLES}/:id`} component={BlogTemplate} />
          <Route path={pageEnum.ME} component={Me} />
        </Route>
      </Router>
    );
  }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

// Change default history to createBrowserHistory if deploy to real server.
// The createBrowserHistory need some server configuration, so can not serve with git page.(URL will not work)
React.render(
  <App />
, document.querySelector('#app'));
