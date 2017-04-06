import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-styled-flexboxgrid'


const Title = styled.h2`
  margin: 14px 0;
  font-size: 14px;
  font-weight: bold;
`

function SectionType(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <Row>
        {
          props.items.map(
            item => props.children(item)
          )
        }
      </Row>
    </div>
  )
}

export default SectionType
