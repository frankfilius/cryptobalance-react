import React, { PureComponent } from 'react'
import { Bar, BarChart, CartesianGrid, Label, LabelList, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export default class Chart extends PureComponent {
  render() {
    const { coins, myCoins } = this.props.data
    let dataSet = myCoins.map(myCoin => {
      let rObj = {}
      rObj["symbol"] = myCoin.symbol
      rObj["amount"] = myCoin.amount
      coins.map(coin => {
        if (coin.symbol === myCoin.symbol) {
          rObj["value"] = coin.price_usd
          rObj["percent_change_7d"] = coin.percent_change_7d
        }
      })
      rObj["total"] = rObj["amount"] * rObj["value"]
      if (Math.sign(rObj["percent_change_7d"]) === 1) {
        rObj["total_last_week"] = rObj["total"] / (1 + (rObj["percent_change_7d"] / 100))
      } else {
        rObj["total_last_week"] = rObj["total"] / (1 - (rObj["percent_change_7d"] / 100))
      }
      console.log(rObj)
      return rObj
    })

    let totalAll = dataSet.reduce((prev, curr) => {return prev + curr.total}, 0).toFixed(2)
    let totalAllPW = dataSet.reduce((prev, curr) => {return prev + curr.total_last_week}, 0).toFixed(2)

    return (
      <div className="Chart">
      <h1>Chart</h1>
      <h2>Total Value: $ {totalAll}</h2>
      <h2 style={{color: '#b1b1b1'}}>Last Week: $ {totalAllPW}</h2>
      <ResponsiveContainer width={700} height="60%">
        <BarChart data={dataSet || []}>
          <XAxis dataKey="symbol">
            <Label value="Coins I own" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'value in $', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Legend verticalAlign="top"/>
          <Bar name="Today" dataKey="total" unit="$" fill="#1976D2" >
          </Bar>
          <Bar name="Last Week" dataKey="total_last_week" unit="$" fill="#BBDEFB" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
  }
}