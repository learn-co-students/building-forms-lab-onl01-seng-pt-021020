import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {

  addBand = band => {
    this.props.store.dispatch({type: 'ADD_BAND', payload: band})
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: 'ADD_BAND', band})
  }
}
const mapStateToProps = state => ({bands: state.bands})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
