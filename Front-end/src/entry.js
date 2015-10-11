import React from 'react/addons';
import Master from './components/Container/Master';
import Home from './components/Container/Home';
import TechNotes from './components/Container/TechNotes';
import Articles from './components/Container/Articles';
import Me from './components/Container/Me';

import pageEnum from './constant/pageName';

import injectTapEventPlugin from 'react-tap-event-plugin';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';

import 'font-awesome/css/font-awesome.min.css';
import './reset.scss';

injectTapEventPlugin();

// change default history to createBrowserHistory if deploy to real server.
React.render((
  <Router>
    <Route path="/" component={Master}>
      <IndexRoute component={Home} />
      <Route path={pageEnum.HOME} component={Home} />
      <Route path={pageEnum.TECHNOTES} component={TechNotes} />
      <Route path={pageEnum.ARTICLES} component={Articles} />
      <Route path={pageEnum.ME} component={Me} />
    </Route>
  </Router>
), document.querySelector('#app'));
