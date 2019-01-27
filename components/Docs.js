import React, { Component } from 'react'
import Default from './docs/Default'
import General from './docs/General'
import Notes from './docs/Notes'
import Intervals from './docs/Intervals'
import Modes from './docs/Modes'
import Chords from './docs/Chords'
import TimeSignature from './docs/TimeSignature'

export default class Docs extends Component{
  render(){
    const { query: {page} } = this.props
    switch(page){
      case "general":
        return <General/>
      case "notes":
        return <Notes/>
      case "intervals":
        return <Intervals/>
      case "chords":
        return <Chords/>
      case "modes":
        return <Modes/>
      case "timesignature":
        return <TimeSignature/>
      default:
        return <Default/>
    }
  }
}