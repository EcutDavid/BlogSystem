import React from 'react/addons';
import './Articles.scss';
import {Card, CardHeader, CardText, Avatar} from'material-ui';
let blogData = {
  iconSymbol: 'DG',
  tilte: 'A',
  Subtitle: 'a mock blog',
  content: 'blablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalba'
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
                  title={item.tilte}
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
