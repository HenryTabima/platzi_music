import React, { PropTypes } from 'react'
import { Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

const Item = styled.div`
  margin-bottom: 1em;
  }
`

const Thumb = styled.img`
  /*width: 155px;*/
  max-width: 100%;
  width: 100%;
  height: auto;
`

const Title = styled.h4`
  font-family: ${props => props.theme.font};
  font-size: 1rem;
  font-weight: bold;
  margin: .5em 0;
`

function Artist(props) {
  if (!props.images[0]) return null
  return (
    <Col xs={6} sm={3}>
      <Item>
        <Thumb src={props.images[0].url} />
        <Title>{props.name}</Title>
      </Item>
    </Col>
  )
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
}

export default Artist
