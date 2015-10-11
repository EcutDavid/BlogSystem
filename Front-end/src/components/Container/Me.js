import React from 'react/addons';
import './Me.scss';

import {FontIcon} from 'material-ui';

//todo: how to get ThemeManager in child material-ui master component?
export default class Me extends React.Component{
  render(){
    return (
      <div className='Me'>
        <h1 className='title'>
          Hi everyone, I{"'"}m David Guan.
          <br />
          Coder, blog writer, books lover.
        </h1>

        <div className='ContentRow'>
          <FontIcon style={{fontSize: '6em', color: '#00bcd4'}}
            className='fa fa-graduation-cap icon left'
            hoverColor='#E74748'/>
          <article className='content'>
            My
            <a href='http://ecutdavid.github.io/WenxiangGuanResume.github.io/'>first resume</a>
            finished on Jun 2, 2015.
            <br />
            It summarize my campus life :)
            <br />
          </article>
        </div>

        <div className='ContentRow'>
          <article className='content left'>
            Working at Newegg.com After Jun 13, 2015.
            <br />
            Based on ASP.Net
          </article>
          <FontIcon style={{fontSize: '6em', color: '#00bcd4'}}
            className='fa fa-laptop icon right'
            hoverColor='#E74748'/>
        </div>

        <div className='ContentRow'>
          <FontIcon style={{fontSize: '6em', color: '#00bcd4'}}
            className='fa fa-book icon left'
            hoverColor='#E74748'/>
          <article className='content'>
            Every day after work,
            <br />
            I begin study and practise new techs.
            <br />
            never stop improve my skills and efficiency.
          </article>
        </div>

        <div className='ContentRow'>
          <article className='content left'>
            <a href='https://github.com/EcutDavid'>Github profile</a>
            <br />
            build project on github repo everyday.
            <br />
            Enjoy Making contibution to open source.
          </article>
          <FontIcon style={{fontSize: '6em', color: '#00bcd4'}}
            className='fa fa-github icon right'
            hoverColor='#E74748'/>
        </div>

        <div className='ContentRow'>
          <FontIcon style={{fontSize: '6em', color: '#00bcd4'}}
            className='fa fa-file-code-o icon left'
            hoverColor='#E74748'/>
          <article className='content'>
            Enjoy writing Blog,
            <br />
            But <a href='http://www.cnblogs.com/E-WALKER/'>this Blog</a> is in Chinese languages.
            <br />
            So I start build this site, with react & node.js.
          </article>
        </div>

        <div className='ContentRow'>
          <article className='content left'>
            I will try my best to do every thing!
          </article>
          <FontIcon style={{fontSize: '6em', color: '#00bcd4'}}
            className='fa fa-heart-o icon right'
            hoverColor='#E74748'/>
        </div>
      </div>
    );
  }
}
