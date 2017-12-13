import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'


export default class User extends React.PureComponent {
	render(){
	
		return (
      <div>
        { 
        this.props.authors && this.props.authors.length > 0  ?  this.props.authors.map((author,index) => 
        <List divided verticalAlign='middle' key={index}>
            <List.Item key={index}>
              <List.Content floated='right'>
                <Button onClick={ ()=>this.props.onDelete(index)}>Delete</Button>
              </List.Content>
              <List.Content>
                {author.title}  <div className='desc'>{author.desc}</div>
              </List.Content>
              
            </List.Item>
          </List>
        ) : null
        }
      </div>
		);
	} 
}