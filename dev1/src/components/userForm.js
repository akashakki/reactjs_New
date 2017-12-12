import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'


export default class UserForm extends React.PureComponent {

  constructor(props){
    super(props)
    this.state = {
    title:'',
     desc:''
    }
  }
	render(){

	
		return (
      <div>
       <Form>
          <Form.Group widths=''>
            <Form.Field id='form-input-control-Title'  onChange={(e) => {console.log(e.target.value),this.setState({title:e.target.value})}} control={Input} label='Title' placeholder='' />
          </Form.Group>
          <Form.Field  width="100%" height="400" id='form-textarea-control-Description' onChange={(e) => {this.setState({desc:e.target.value})}} control={TextArea} label='Description' placeholder='' />
          <Form.Field id='form-button-control-public' control={Button} content='save' onClick={()=>this.props.addAuthor(this.state)}/>
        </Form>
      </div>
		);
	} 
}