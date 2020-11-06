import React, { Component } from 'react'


const initialState = {
  name: ''
}

class BandInput extends Component {
  state = {
    ...initialState
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      ...initialState
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type='submit'>Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
