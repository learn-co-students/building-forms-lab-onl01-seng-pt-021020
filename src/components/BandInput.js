import React, { Component } from 'react'
 
class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    let newBand = {...this.state}
    this.props.addBand(newBand)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
        <input type="text" placeholder="band Name" value={this.state.name} onChange={event => this.handleOnChange(event)}></input>
        </form>
        <button type="submit">press</button>
      </div>
    )
  }
}

export default BandInput
