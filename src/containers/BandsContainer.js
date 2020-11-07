import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mstp = ({ bands }) => ({ bands })

const mdtp = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mstp, mdtp)(BandsContainer)
