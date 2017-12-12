import React from 'react'
import { Container } from 'semantic-ui-react'
import { Header1 } from './Header'
import  User   from  './User'
import { Footer1 } from  './Footer'

 export const Container1 = (props) => (
  <Container text>
    <Header1 addAuthor={props.addAuthor}/>
      <User authors = {props.authors} onDelete={props.onDelete} isViewAll={props.isViewAll}/>
    <Footer1 {...props} />
  </Container>
)
