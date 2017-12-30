import React, { PureComponent } from 'react'
import CoinList from '../CoinList'
import styles from './Sidebar.css'

export default class Sidebar extends PureComponent {
  render() {
    return (
      <div className="Sidebar">
       <CoinList />
      </div>
    )
  }
}