import React from 'react'
import { Col } from 'react-styled-flexboxgrid'

function Artist(props) {
  return (
    <Col xs={12}>{props.name}</Col>
  )
}

export default Artist
