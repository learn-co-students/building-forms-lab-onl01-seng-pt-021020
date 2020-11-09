// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      text: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Band Name:</label>
          <input type="text" name="text" id="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
        {this.state.band}
      </div>
    )
  }
}

export default BandInput
