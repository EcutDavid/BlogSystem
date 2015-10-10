import React from 'react/addons';
import './TechNotes.scss';
import {Card, CardHeader, CardText} from'material-ui';
let tiltes = ['K', 'B', 'D', 'E', 'G', 'H'];

export default class TechNotes extends React.Component{
  render(){
    return (
      <div className='TechNotes'>
        {
          tiltes.map(item => {
            return (
              <Card className='Card'>
                <CardHeader />
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
