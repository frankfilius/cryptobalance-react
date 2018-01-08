import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { action } from '../../store'
import Form from '../presentational/Form'
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
          { coins.length > 0 &&
            <Form 
              loopItems={coins} 
              itemValue="symbol" 
              input=""
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit} 
              valueSelect={this.state.symbol} 
              valueInput={this.state.amount} 
            />
          }
        </div>
      )
    }
}

export default connect(state => state, null)(CoinList)