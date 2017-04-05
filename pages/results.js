import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import { searchTheme } from '../lib/themes'
import Hero from '../components/Hero'

class ResultsPage extends Component {


  static async getInitialProps({ query }) {
    const URL = `https://api.spotify.com/v1/search/?q=${query.query}&type=artist,album,track`

    const response = await fetch(URL)
    const data = await response.json()

    return data
  }

  render() {
    console.log(this.props);
    return (
      <ThemeProvider theme={searchTheme}>
        <div>
        </div>
      </ThemeProvider>
    )
  }

}

export default ResultsPage
