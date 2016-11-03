import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    title: state.title 
  }
}


class App extends Component {
  render () {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

export default connect(mapStateToProps)(App)
