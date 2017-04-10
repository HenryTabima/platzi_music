import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'
import withRedux from 'next-redux-wrapper'
import { searchTheme } from '../lib/themes'
import makeStore from '../lib/makeStore'
import Hero from '../components/Hero'
import Loading from '../components/Loading'
import Results from '../components/Results'

class ResultsPage extends Component {

  static async getInitialProps({ query }) {
    try {
      const URL = `https://api.spotify.com/v1/search/?q=${query.query}&type=artist,album,track`
      const response = await fetch(URL)
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }

  state = {
    searching: false,
  }

  componentWillReceiveProps() {
    this.setState({
      searching: false,
    })
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
      <ThemeProvider theme={searchTheme}>
        <div>
          <Hero onSubmit={this.handleSubmit} />
          <Grid>
            {
              this.state.searching
              ? <Loading />
              : <Results {...this.props} />
            }
          </Grid>
        </div>
      </ThemeProvider>
    )
  }

}


export default withRedux(makeStore)(ResultsPage)
