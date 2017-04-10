import React from 'react'
import styled, { keyframes } from 'styled-components'

const Background = styled.div`
  padding: 1em 0;
`
const animation = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: space-around;
  height: 70px;
  position: relative;
  overflow: hidden;
  background: #e9eaed;
  margin-bottom: 1em;
  &:after {
    content: '';
    height: inherit;
    position: absolute;
    animation: ${animation} 1s infinite;
    width: 100%;
    background-size: 800px 104px;
    background-image: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  }
`
const Bar = styled.span`
  width: 10px;
  background: white;
  position: relative;
  z-index: 2
`

function Loading() {
  return (
    <Background>
      <Item><Bar /><Bar /><Bar /><Bar /></Item>
      <Item><Bar /><Bar /><Bar /><Bar /></Item>
      <Item><Bar /><Bar /><Bar /><Bar /></Item>
      <Item><Bar /><Bar /><Bar /><Bar /></Item>
      <Item><Bar /><Bar /><Bar /><Bar /></Item>
      <Item><Bar /><Bar /><Bar /><Bar /></Item>
      <Item><Bar /><Bar /><Bar /><Bar /></Item>
    </Background>
  )
}

export default Loading
