import React from 'react/addons';
import './Articles.scss';
import {Card, CardHeader, CardText, Avatar} from'material-ui';
let blogData = {
  iconSymbol: 'DG',
  tilte: 'Coding & Life',
  Subtitle: 'a mock blog',
  content: `blablalbablablalbablablal
    bablablalbablablalbablablalbablablalba
    blablalbablablalbablablalbablablalbablablalbabla
    blalbablablalbablablalbablablalbablablalbablabla
    lbablablalbablablalbablablalbablablalbablablalba
    blablalbablablalbablablalba`
};
let blogItems = [blogData];

export default class Articles extends React.Component{
  render(){
    return (
      <div className='Articles'>
        {
          blogItems.map((item, index) => {
            return (
              <Card className='Card' key={`TechNotesCard${index}`}>
                <CardHeader
                  title=<h1>{item.tilte}</h1>
                  subtitle={item.Subtitle}
                  avatar={<Avatar backgroundColor= '#00bcd4'>{item.iconSymbol}</Avatar>}/>
                <CardText>
                  {item.content}
                </CardText>
              </Card>);
          })
        }
      </div>
    );
  }
}
