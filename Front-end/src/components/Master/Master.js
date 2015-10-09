import React from 'react/addons';
import {Tabs, Tab} from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import './Master.scss';
import { PropTypes } from 'react-router';
import pageEnum from '../../constant/pageName';

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      headerIcon: 'home'
    };
    this.mixins = [History];
  }

  getChildContext(){
    return {
      muiTheme: this.state.muiTheme
    };
  }

  _changePage(iconName, path){
    this.setState({headerIcon: iconName});
    this.context.history.pushState(null, path);
  }

  render(){
    return (
      <div className='Master'>
        <header className='headerBar' style={{backgroundColor: this.state.muiTheme.appBar.color}}>
          <i className={`fa fa-${this.state.headerIcon} headerIcon`}/>
          <Tabs className='headerTabs'>
            <Tab label='Home' onClick= {() => {this._changePage('home', `/${pageEnum.HOME}`); }}/>
            <Tab label='TechNotes' onClick= {() => {this._changePage('code', `/${pageEnum.TECHNOTES}`); }}/>
            <Tab label='Articles' onClick= {() => {this._changePage('pencil', `/${pageEnum.ARTICLES}`); }}/>
            <Tab label='Me' onClick= {() => {this._changePage('smile-o', `/${pageEnum.ME}`); }}/>
          </Tabs>
        </header>
        {this.props.children}
        <footer>

        </footer>
      </div>
    );
  }
}

App.contextTypes = {
  history: PropTypes.history
};

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};
