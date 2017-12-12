import React from 'react'
import{ Button , Grid } from 'semantic-ui-react'

 export const Footer1 = (props) => (
  <Grid.Row>
      <Grid.Column>
        <Button as='a' onClick={()=>props.viewAll()}> View All</Button>
        <Button as='a' onClick={()=>props.viewDelete()}> View Delete</Button>
        <Button as='a' onClick={()=>props.purge()}>Purge</Button>

      </Grid.Column>
    </Grid.Row>
  )
