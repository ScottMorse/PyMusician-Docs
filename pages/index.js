import React, { Component } from 'react'
import Home from '../components/Home'

// export default (props) => <Home/>

export default class Index extends Component {
  static pageTransitionReadyToEnter = true

  componentDidMount(){
    this.props.pageTransitionReadyToEnter()
  }

  render(){
    return <Home/>
  }
}