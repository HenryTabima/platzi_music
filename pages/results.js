import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import { searchTheme } from '../lib/themes'
import Hero from '../components/Hero'

class ResultsPage extends Component {

  state = {
    searching: true
  }

  static async getInitialProps({ query }) {
    console.log(query);
    const URL = `https://api.spotify.com/v1/search/?q=${query.query}&type=artist,album,track`

    const response = await fetch(URL)
    const data = await response.json()

    return data
  }

  handleSubmit = (event) => {
    this.state({
      searching: true
    })
    event.preventDefault()
    const form = event.target
    const value = form.elements.buscar.value
    Router.push(`/results?query=${value}`)
  }

  render() {
    console.log(this.props);
    return (
      <ThemeProvider theme={searchTheme}>
        <div>
          <Hero onSubmit={this.handleSubmit}/>
        </div>
      </ThemeProvider>
    )
  }

}

export default ResultsPage
