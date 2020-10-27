// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Band Name</label>
        <input onChange={this.handleChange} type='text' name='name' value={this.state.name}/>
        <input type='submit' />
      </form>
    )
  }
}

export default BandInput
