import React, { PureComponent } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export default class Chart extends PureComponent {
  render() {
    const { coins, myCoins } = this.props.data
    let dataSet = myCoins.map(myCoin => {
      let rObj = {}
      rObj["symbol"] = myCoin.symbol
      rObj["amount"] = myCoin.amount
      coins.map(coin => {
        if (coin.symbol === myCoin.symbol) {
          return rObj["value"] = coin.price_usd
        }
      })
      rObj["total"] = rObj["amount"] * rObj["value"]
      return rObj
    })
    console.log(dataSet)

    return (
      <div className="Chart">
      <h1>Chart</h1>
      <ResponsiveContainer width={700} height="80%">
        <BarChart data={dataSet}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="symbol" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#1976D2" />
          <Bar dataKey="uv" fill="#BBDEFB" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
  }
}