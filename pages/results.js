import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'
import { searchTheme } from '../lib/themes'
import Hero from '../components/Hero'
import Loading from '../components/Loading'

class ResultsPage extends Component {

  state = {
    searching: false
  }

  static async getInitialProps({ query }) {
    try {
      const URL = `https://api.spotify.com/v1/search/?q=${query.query}&type=artist,album,track`
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data);
      return data
    } catch (error) {
      throw error
    }
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

  componentWillReceiveProps() {
    this.setState({
      searching: false
    })
  }

  render() {
    return (
      <ThemeProvider theme={searchTheme}>
        <div>
          <Hero onSubmit={this.handleSubmit}/>
          <Grid>
            {
              this.state.searching
              ? <Loading/>
              : <div>{this.props.artists.items[0].name}</div>
            }
          </Grid>
        </div>
      </ThemeProvider>
    )
  }

}

export default ResultsPage
