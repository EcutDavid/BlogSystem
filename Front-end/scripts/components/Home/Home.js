import React from 'react/addons';
import {Tabs, Tab} from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import './home.scss';


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      headerIcon: 'home'
    };
  }

  getChildContext(){
    return {
      muiTheme: this.state.muiTheme
    };
  }

  render(){
    return (
      <div className='App'>
        <div className='headerBar'>
          <i className={`fa fa-${this.state.headerIcon} headerIcon`}></i>
          <Tabs className='headerTabs'>
            <Tab label='Home' onClick= {() => {this.setState({headerIcon: 'home'}); }}/>
            <Tab label='TechNotes' onClick= {() => {this.setState({headerIcon: 'code'}); }}/>
            <Tab label='Articles' onClick= {() => {this.setState({headerIcon: 'pencil'}); }}/>
            <Tab label='Me' onClick= {() => {this.setState({headerIcon: 'smile-o'}); }}/>
          </Tabs>
        </div>
      </div>
    );
  }
}


App.childContextTypes = {
    muiTheme: React.PropTypes.object
};
