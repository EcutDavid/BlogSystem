import React from 'react/addons';
import Home from './components/Home/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'font-awesome/css/font-awesome.min.css';
import './reset.scss';

injectTapEventPlugin();
React.render(<Home />, document.querySelector('#app'));
