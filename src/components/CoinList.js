import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { action } from '../store'

export class CoinList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      coin: '',
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    action('FETCH_COINS')
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    const {coin, amount} = this.state
    action('SAVE_COINS', {coin, amount})
    event.preventDefault()
  }

  render() {
    const {coins} = this.props.coins
      return (
        
          <div className='CoinList'>
          {coins &&
          <form onSubmit={this.handleSubmit}>
            <select name="coin" value={this.state.coin} onChange={this.handleChange}>
              { coins.map((coin, index) => <option key={index} value={coin.symbol}>{coin.symbol}</option>)}
            </select>
            <input name="amount" type="number" step="0.00000001" value={this.state.amount} onChange={this.handleChange}/>
            <input type="submit" value="Submit" />
          </form>
          }
          </div>
        
      )
    }
}

const mapStateToProps = (coins) => ({ coins })

export default connect(mapStateToProps, null)(CoinList)