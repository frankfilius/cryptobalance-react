import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { action } from '../store'

export class CoinList extends PureComponent {
  componentWillMount() {
    action('FETCH_COINS')
  }

  render() {
    const {coins} = this.props.coins
      return (
        
          <div className='CoinList'>
          {coins &&
            coins.map((coin, index) => <p key={index}>{coin.symbol}</p>)
          }
            
          </div>
        
      )
    }
}

const mapStateToProps = (coins) => ({ coins })

export default connect(mapStateToProps, null)(CoinList)