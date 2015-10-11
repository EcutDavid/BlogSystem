import React from 'react/addons';
import './Me.scss';

import {FontIcon} from 'material-ui';

//todo: how to get ThemeManager in child material-ui master component?
export default class Me extends React.Component{
  render(){
    return (
      <div className='Me'>
        <div className='ContentRow'>
          <FontIcon style={{fontSize: '6em', color: '#00bcd4'}}
            className='fa fa-file-code-o icon left'
            hoverColor='#E74748'/>
          <article className='content'>
            This is my first
          </article>
        </div>
        <div className='ContentRow'>
          <article className='content left'>
            This is my first
          </article>
          <FontIcon style={{fontSize: '6em', color: '#00bcd4'}}
            className='fa fa-file-code-o icon right'
            hoverColor='#E74748'/>
        </div>
      </div>
    );
  }
}
