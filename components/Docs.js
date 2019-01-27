import React, { Component } from 'react'
import Default from './docs/Default'
import GettingStarted from './docs/GettingStarted'
import Notes from './docs/Notes'
import Intervals from './docs/Intervals'
import Modes from './docs/Modes'
import Chords from './docs/Chords'
import TimeSignatures from './docs/TimeSignatures'

export default class Docs extends Component{
  render(){
    const { query: {page} } = this.props
    switch(page){
      case "getting-started":
        return <GettingStarted/>
      case "notes":
        return <Notes/>
      case "intervals":
        return <Intervals/>
      case "chords":
        return <Chords/>
      case "modes":
        return <Modes/>
      case "timesignatures":
        return <TimeSignatures/>
      default:
        return <Default/>
    }
  }
}