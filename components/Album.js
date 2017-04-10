import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'

const Item = styled.div`
  margin-bottom: 1em;
  cursor: pointer;
  &:hover {
    & h4 {
      text-decoration: underline;
    }
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

const Text = styled.p`
  color: #4b4e5a;
  font-family: ${props => props.theme.font};
  font-size: .9rem;
  margin: 0;
`

async function getAlbum(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

class Album extends Component {
  handleClick = () => {
    const album = getAlbum(this.props.href)
    this.props.dispatch({
      type: 'SET_ALBUM_DATA',
      payload: {
        data: this.props,
      },
    })
    album.then((data) => {
      this.props.dispatch({
        type: 'SET_PLAYLIST',
        payload: {
          playlist: data.tracks.items,
        },
      })
    })
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

Album.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(null)(Album)
