import React, { PureComponent } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import styles from './Main.css'

export default class Sidebar extends PureComponent {
  render() {
    return (
      <div className="Main">
        <ResponsiveContainer width={700} height="80%" >
        <h1>Graph</h1>
        </ResponsiveContainer>
      </div>
    )
  }
}