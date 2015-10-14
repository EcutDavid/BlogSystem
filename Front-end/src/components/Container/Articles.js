import React from 'react/addons';
import './Articles.scss';
import {Card, CardHeader, CardText, Avatar, LeftNav, MenuItem} from'material-ui';
let tiltes = ['A', 'B', 'D', 'E', 'G', 'H'];

let menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: 'Article type' },
  { type: MenuItem.Types.SUBHEADER, text: 'Site Link' },
  {
     type: MenuItem.Types.LINK,
     payload: '/',
     text: 'Homepage'
  }
];

export default class Articles extends React.Component{
  render(){
    return (
      <div className='Articles'>
        <LeftNav style={{position: 'absolute', top: 48}} className='leftNav' ref='leftNav' menuItems={menuItems} />
        {
          tiltes.map(item => {
            return (
              <Card className='Card'>
                <CardHeader
                  title="Title"
                  subtitle="Subtitle"
                  avatar={<Avatar>JS</Avatar>}/>
                <CardText>
                  {`The content of blog pt ${item}`}
                </CardText>
              </Card>);
          })
        }
      </div>
    );
  }
}
