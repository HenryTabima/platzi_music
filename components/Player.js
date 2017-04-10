import React, { Component, PropTypes } from 'react'
import styled, { keyframes } from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { connect } from 'react-redux'
import { formattedTime } from '../lib/utils'
import PlayerAlbum from './PlayerAlbum'

const bounceIn = keyframes`
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0$ {
    opacity: 0;
    transform: scale3d(.3,.3,.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60$ {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    tranform: scale3d(1, 1, 1);
  }
`

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e1e5f0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.05);
  overflow: auto;
  max-height: 60%;
`
const PlayerGrid = styled(Grid)`
  position: relative;
`
const Expand = styled.button`
  position: absolute;
  right: 0;
  top: 5px;
  border: none;
  background: none;
  outline: 0;
  cursor: pointer;
  color: ${props => props.theme.color.grayB};
  animation: ${bounceIn} 1s;
`
const PlayerUI = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Timer = styled.span`
  color: ${props => props.theme.color.grayB};
  width: 50px;
  display: inline-block;
`
const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
  color: ${props => props.theme.color.grayB};
  outline: 0;
`
const Play = styled(Button)`
  font-size: 50px;
`
const Line = styled.div`
  width: 100%;
  height: 5px;
  background: #e1e5f0;
  position: relative;
  margin-top: 1em;
`
const CurretTime = styled.div`
  background: #5179ff;
  height: inherit;
  left: 0;
  position: absolute;
  width: ${props => props.width}%;
`

class Player extends Component {
  state = {
    paused: true,
    duration: 0,
    currentProgress: 0,
    currentTime: 0,
    expanded: false,
  }

  onLoadedMetadata = (event) => {
    this.setState({
      duration: event.target.duration,
    })
  }

  onTimeUpdate = (event) => {
    this.setState({
      currentTime: event.target.currentTime,
      currentProgress: (event.target.currentTime * 100) / event.target.duration,
    })
  }

  onPlay = () => {
    this.setState({
      paused: false,
    })
  }

  onEnded = () => {
    this.nextTrack()
  }

  handleNextTrack = () => {
    this.nextTrack()
  }

  nextTrack = () => {
    let currentTrack = this.props.currentTrack + 1
    if (currentTrack === this.props.playlist.length) {
      currentTrack = 0
    }
    this.props.dispatch({
      type: 'SET_CURRENT_TRACK',
      payload: {
        index: currentTrack,
      },
    })
  }

  handlePrevTrack = () => {
    let currentTrack = this.props.currentTrack + 1
    if (currentTrack < 0) {
      currentTrack = this.props.playlist.length - 1
    }
    this.props.dispatch({
      type: 'SET_CURRENT_TRACK',
      payload: {
        index: currentTrack,
      },
    })
  }

  handleTogglePlay = () => {
    if (this.audio.paused) this.audio.play()
    else this.audio.pause()
    this.setState({
      paused: !this.state.paused,
    })
  }

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    if (this.props.playlist.length === 0) return null
    const expandIcon = this.state.expanded ? 'icon-arrow-bottom' : 'icon-arrow-top'
    const currentTrack = this.props.playlist[this.props.currentTrack]
    return (
      <Wrapper className="">
        <PlayerGrid>
          {this.props.playlist.length > 1 &&
            <Expand
              onClick={this.handleExpandClick}
              className={expandIcon}
            />
          }
          <Row bottom="xs">
            <Col xs={5}>
              <PlayerAlbum
                trackName={currentTrack.name}
              />
            </Col>
            <Col xs={7}>
              <PlayerUI>
                <audio
                  src={currentTrack.preview_url}
                  ref={(audio) => { this.audio = audio }}
                  onLoadedMetadata={this.onLoadedMetadata}
                  onTimeUpdate={this.onTimeUpdate}
                  onPlay={this.onPlay}
                  onEnded={this.onEnded}
                  autoPlay
                />
                <Buttons>
                  <Timer>
                    {formattedTime(this.state.currentTime * 1000)}
                  </Timer>
                  <div>
                    <Button
                      className="icon-previous"
                      onClick={this.handlePrevTrack}
                    />
                    <Play
                      className={this.state.paused ? 'icon-play' : 'icon-pause'}
                      onClick={this.handleTogglePlay}
                    />
                    <Button
                      className="icon-next"
                      onClick={this.handleNextTrack}
                    />
                  </div>
                  <Timer>
                    {formattedTime(this.state.duration * 1000)}
                  </Timer>
                </Buttons>
                <Line>
                  <CurretTime width={this.state.currentProgress} />
                </Line>
              </PlayerUI>
            </Col>
          </Row>
        </PlayerGrid>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    nombreDesdeEstado: state.nombre,
    playlist: state.playlist,
    currentTrack: state.currentTrack,
  }
}

Player.propTypes = {
  currentTrack: PropTypes.number.isRequired,
  playlist: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(Player)
