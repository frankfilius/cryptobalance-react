import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { action } from '../store'
import Form from './Form'
import styles from './CoinList.css'

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

  handleChange(event, id, payload) {
    const name = !!event.target.name ? event.target.name : "symbol"
    const value = !!payload ? payload : event.target.value
    this.setState({
      [name]: value
    })
  }

  handleClick = (coin) => event => action('DELETE_COIN', coin)

  handleSubmit(event) {
    const {symbol, amount} = this.state
    action('SAVE_COIN', {symbol, amount})
    this.setState({
      symbol: '',
      amount: ''
    })
    event.preventDefault()
  }

  render() {
    const {coins, myCoins} = this.props
      return (
        <div className='CoinList'>
          <h1>CoinList</h1>
          <div className="headers">
            <p>Coin:</p>
            <p>Amount:</p>
            <p></p>
          </div>
          {coins.length > 0 &&
            <Form content={coins} contentValue="symbol" onChange={this.handleChange} onSubmit={this.handleSubmit} valueSelect={this.state.symbol} valueNumber={this.state.amount} />
          }
          {myCoins.length > 0 &&
            myCoins.map((coin, index) => <Form key={index} content={[coin]} contentValue="symbol" onChange={this.handleChange} onClick={this.handleClick(coin)} onSubmit={this.handleSubmit} valueSelect={coin.symbol} valueNumber={coin.amount} />)
          }
        </div>
      )
    }
}

export default connect(state => state, null)(CoinList)