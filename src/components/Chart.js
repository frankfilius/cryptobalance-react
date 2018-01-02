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
          rObj["last_week"] = coin.percent_change_7d
        }
      })
      rObj["total"] = rObj["amount"] * rObj["value"]
      if (Math.sign(rObj["last_week"]) === 1) {
        rObj["total_last_week"] = rObj["total"] + (rObj["total"] * (rObj["last_week"] / 100))
      } else {
        rObj["total_last_week"] = rObj["total"] - (rObj["total"] * (rObj["last_week"] / 100))
      }
      return rObj
    })

    return (
      <div className="Chart">
      <h1>Chart</h1>
      <ResponsiveContainer width={700} height="80%">
        <BarChart data={dataSet}>
          <XAxis dataKey="symbol">
            <Label value="Coins I own" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'value in $', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Legend />
          <Bar name="Today" dataKey="total" unit="$" fill="#1976D2" >
           <LabelList dataKey="total" position="top" />
          </Bar>
          <Bar name="Last Week" dataKey="total_last_week" unit="$" fill="#BBDEFB" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
  }
}