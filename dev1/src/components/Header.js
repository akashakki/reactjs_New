import React from 'react'
import { Header } from 'semantic-ui-react'

import UserForm from './userForm'

 export const Header1 = (props) => {
   return(
  <div>
    <Header as='h1'>Author ID</Header>
        <UserForm addAuthor={props.addAuthor}/>
    </div>
  )
}
