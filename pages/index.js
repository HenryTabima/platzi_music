import React, { Component } from 'react'
import Router from 'next/router'
import { Grid } from 'react-styled-flexboxgrid'
import { ThemeProvider } from 'styled-components'
import { indexTheme, searchTheme } from '../lib/themes.js'
import '../lib/global'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

class HomePage extends Component {

  state = {
    loading: false,
  }

  handleSubmit = (event) => {
    this.setState({
      loading: true
    })
    event.preventDefault()
    const form = event.target
    const value = form.elements.buscar.value
    Router.push(`/results?query=${value}`)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.loading ? searchTheme : indexTheme}>
        <div>
          <Hero/>
          <Grid>
            <Footer/>
          </Grid>
        </div>
      </ThemeProvider>
    )
  }

}

export default HomePage
