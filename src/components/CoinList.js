import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import fetchCoins from '../actions/coins/fetch'

export class CoinList extends PureComponent {
  componentWillMount() {
    fetchCoins();
  }

  render() {
    return (
      
    )
  }
}

export default connect(null,{fetchCoins})(CoinList)