import React from 'react'
import { Col } from 'react-styled-flexboxgrid'

function Album(props) {
  return (
    <Col xs={12}>{props.name}</Col>
  )
}

export default Album
