import React, { Component } from 'react'
import Router from 'next/router'
import whithRedux from 'next-redux-wrapper'
import makeStore from '../lib/makeStore'
import { Grid } from 'react-styled-flexboxgrid'
import { ThemeProvider } from 'styled-components'
import { indexTheme, searchTheme } from '../lib/themes.js'
import '../lib/global'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

class HomePage extends Component {

  state = {
    searching: false,
  }

  handleSubmit = (event) => {
    this.setState({
      searching: true
    })
    event.preventDefault()
    const form = event.target
    const value = form.elements.buscar.value
    Router.push(`/results?query=${value}`)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.searching ? searchTheme : indexTheme}>
        <div>
          <Hero onSubmit={this.handleSubmit}/>
          <Grid>
            {
              this.state.searching
              ? <Loading />
              : <Footer/>
            }
          </Grid>
        </div>
      </ThemeProvider>
    )
  }

}

export default withRedux(makeStore)(HomePage)
