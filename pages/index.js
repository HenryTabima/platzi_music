import React, { Component } from 'react'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { Grid } from 'react-styled-flexboxgrid'
import { ThemeProvider } from 'styled-components'
import makeStore from '../lib/makeStore'
import { indexTheme, searchTheme } from '../lib/themes'
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
      searching: true,
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
          <Hero onSubmit={this.handleSubmit} />
          <Grid>
            {
              this.state.searching
              ? <Loading />
              : <Footer />
            }
          </Grid>
        </div>
      </ThemeProvider>
    )
  }

}

export default withRedux(makeStore)(HomePage)
