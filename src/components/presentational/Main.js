import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Chart from '../Chart'
import styles from './Main.css'

export class Main extends PureComponent {
  render() {
    const { coins, myCoins } = this.props
    return (
      <div className="Main">
      {coins.length > 0 && myCoins.length > 0 && 
        <Chart data={this.props}/>
      }
      </div>
    )
  }
}

export default connect(state => state, null)(Main)