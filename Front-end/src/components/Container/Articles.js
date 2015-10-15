import React from 'react/addons';
import './Articles.scss';
import {Card, CardHeader, CardText, Avatar} from'material-ui';
let tiltes = ['A', 'B', 'D', 'E', 'G', 'H'];

export default class Articles extends React.Component{
  render(){
    return (
      <div className='Articles'>
        {
          tiltes.map((item, index) => {
            return (
              <Card className='Card' key={`TechNotesCard${index}`}>
                <CardHeader
                  title="Title"
                  subtitle="Subtitle"
                  avatar={<Avatar>DG</Avatar>}/>
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
