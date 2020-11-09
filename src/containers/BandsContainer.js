import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

renderbands = () => this.props.bands.map((band, index) => <li key={index}>Presenting... <u>{band.band}!</u></li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <u><h2>Band names</h2></u>
        {this.renderbands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
