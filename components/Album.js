import React, { Component } from 'react'
import { Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

const Item = styled.div`
  margin-bottom: 1em;
  cursor: pointer;
  &:hover {
    & h4 {
      text-decoration: underline;
    }
  }
`;

const Thumb = styled.img`
  /*width: 155px;*/
  max-width: 100%;
  width: 100%;
  height: auto;
`;

const Title = styled.h4`
  font-family: ${props => props.theme.font};
  font-size: 1rem;
  font-weight: bold;
  margin: .5em 0;
`;

const Text = styled.p`
  color: #4b4e5a;
  font-family: ${props => props.theme.font};
  font-size: .9rem;
  margin: 0;
`;

class Album extends Component {

  constructor (props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evento) {
    console.log(`Diste click sobre el album "${this.props.name}"`)
  }

  render() {
    return (
      <Col xs={6} sm={3}>
        <Item onClick={this.handleClick}>
          <Thumb src={this.props.images[0].url} />
          <Title>{this.props.name}</Title>
          <Text>{this.props.artists[0].name}</Text>
        </Item>
      </Col>
    )
  }
}

export default Album
