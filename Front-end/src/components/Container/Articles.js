import React from 'react/addons';
import './Articles.scss';
import {Card, CardHeader, CardText} from'material-ui';
let tiltes = ['A', 'B', 'D', 'E', 'G', 'H'];

export default class Articles extends React.Component{
  render(){
    return (
      <div className='Articles'>
        {
          tiltes.map(item => {
            return (
              <Card className='Card'>
                <CardHeader />
                <CardText>
                  {`The content of blog post ${item}`}
                </CardText>
              </Card>);
          })
        }
      </div>
    );
  }
}
