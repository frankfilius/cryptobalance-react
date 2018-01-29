import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { action } from '../../store'
import { InputLabel } from 'material-ui/Input'
import Form from '../presentational/Form'
import MuiIcon from '../presentational/MuiIcon'
import MuiMenuItem from '../presentational/MuiMenuItem'
import MuiSelect from '../presentational/MuiSelect'
import MuiTextField from '../presentational/MuiTextField'
import MuiButton from '../presentational/MuiButton'
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
            <Form onSubmit={this.handleSubmit} >
              <MuiSelect 
                value={this.state.symbol} 
                onChange={this.handleChange}
                inputLabel={<InputLabel htmlFor="coin">Asset</InputLabel>}
              >
                { 
                  coins.map((item, index) => {
                    return (
                      <MuiMenuItem key={index} value={item.symbol} />
                    )
                  })
                }
              </MuiSelect>
              <MuiTextField 
                name="amount" 
                type="number" 
                step="0.00000001" 
                style={{minWidth: 80}} 
                value={this.state.amount} 
                onChange={this.handleChange} 
              />
              <MuiButton>
                <MuiIcon color="accent" icon="add" />
              </MuiButton>
            </Form>
          }
        </div>
      )
    }
}

export default connect(state => state, null)(CoinList)