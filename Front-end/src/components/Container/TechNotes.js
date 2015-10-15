import React from 'react/addons';
import './TechNotes.scss';
import {Card, CardHeader, CardText, Avatar} from'material-ui';
let tiltes = ['K', 'B', 'D', 'E', 'G', 'H'];

export default class TechNotes extends React.Component{
  render(){
    return (
      <div className='TechNotes'>
        {
          tiltes.map((item, index) => {
            return (
              <Card className='Card' key={`TechNotesCard${index}`}>
              <CardHeader
                title={item}
                subtitle="Subtitle"
                avatar={<Avatar backgroundColor= '#00bcd4'>JS</Avatar>}/>
                <CardText>
                  {`The content of tech blog post ${item}`}
                </CardText>
              </Card>);
          })
        }
      </div>
    );
  }
}
