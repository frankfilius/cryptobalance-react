import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { action } from '../store'
import Form from './Form'

export class CoinList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      symbol: '',
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    action('FETCH_COINS')
    action('FETCH_MY_COINS')
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    const {symbol, amount} = this.state
    action('SAVE_COINS', {symbol, amount})
    event.preventDefault()
  }

  render() {
    const {coins, myCoins} = this.props
      return (
        <div className='CoinList'>
          {coins &&
            <Form content={coins} contentValue="symbol" onChange={this.handleChange} onSubmit={this.handleSubmit} valueSelect={this.state.symbol} valueNumber={this.state.amount} />
          }
          {myCoins &&
            myCoins.map((coin, index) => <Form key={index} content={myCoins} contentValue="symbol" onChange={this.handleChange} onSubmit={this.handleSubmit} valueSelect={coin.symbol} valueNumber={coin.amount} disabled="disabled" />)
          }
        </div>
      )
    }
}

export default connect(state => state, null)(CoinList)