import React, { Component } from 'react'
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

class Artist extends Component {

  constructor (props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evento) {
    console.log(`Diste click sobre el Artista "${this.props.name}"`)
  }

  render() {
    if(!this.props.images[0]) return null
    return (
      <Col xs={6} sm={3}>
        <Item onClick={this.handleClick}>
          <Thumb src={this.props.images[0].url} />
          <Title>{this.props.name}</Title>
        </Item>
      </Col>
    )
  }
}

export default Artist
