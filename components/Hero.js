import React from 'react'
import styled from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'
import Searcher from './Searcher'
import Title from './Title'
import Logo from './Logo'

const Background = styled.div`
  background: url(/static/background.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
  @media (max-width: 1024px){
    background: rgb(233, 131, 238);
  }
`
const Gradient = styled.div`
  background: linear-gradient(to left, ${props=>props.theme.color.primary}, ${props=>props.theme.color.secondary});
  padding: ${props=>props.theme.hero.padding}
`
const GridHero = styled(Grid)`
  text-align: center;
`

function Hero() {
  return (
    <Background>
      <Gradient>
        <GridHero>
          <Logo/>
          <Title/>
          <Searcher/>
        </GridHero>
      </Gradient>
    </Background>
  )
}

export default Hero
