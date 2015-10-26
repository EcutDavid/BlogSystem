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
    this.mixins = [History];
    //todo: can not fetch this.context.muiTheme here, why?
    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      headerIcon: 'home'
    };
  }

  _changePage(iconName, path){
    this.setState({headerIcon: iconName});
    this.context.history.pushState(null, path);
  }

  _isStrStartWith(str, matchStr){
    return str.indexOf(matchStr) === 0;
  }

  _getTabIndex(){
    let path = this.props.location.pathname;
    if(this._isStrStartWith(path, `/${pageEnum.HOME}`)){
      return 0;
    }
    if(this._isStrStartWith(path, `/${pageEnum.TECHNOTES}`)){
      return 1;
    }
    if(this._isStrStartWith(path, `/${pageEnum.ARTICLES}`)){
      return 2;
    }
    if(this._isStrStartWith(path, `/${pageEnum.ME}`)){
      return 3;
    }
    return 0;
  }

  render(){
    return (
      <div className='Master'>
        <header className='headerBar' style={{backgroundColor: this.state.muiTheme.tabs.backgroundColor}}>
          <i className={`fa fa-${this.state.headerIcon} headerIcon`}/>
          <Tabs initialSelectedIndex={this._getTabIndex()} className='headerTabs'>
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
  history: PropTypes.history,
  muiTheme: React.PropTypes.object
};
