import React, { PureComponent } from 'react'
import CoinList from '../container/CoinList'
import MuiTypography from './MuiTypography'
import styles from './Sidebar.css'

export default class Sidebar extends PureComponent {
  render() {
    return (
      <div className="Sidebar">
        <MuiTypography type="display2">CoinList</MuiTypography>
        <CoinList />
      </div>
    )
  }
}