import React, { useEffect, useState } from 'react'
import { Bar, HorizontalBar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { useBarChartData } from '../store/actions'

export const BarChart = () => {
  // const [value, setValue] = useState([2000, 900])
  // const barChartData = {
  //   labels: ['January', 'February'],
  //   datasets: [{
  //     "stack": "0",
  //     "backgroundColor": "lightblue",
  //     "label": "Shoes Sale",
  //     "data": [
  //       100,
  //       200
  //     ]
  //   },
  //   {
  //     "stack": "0",
  //     "backgroundColor": "pink",
  //     "label": "Shoes Revenue",
  //     "data": [
  //       1000,
  //       1500
  //     ]
  //   },
  //   {
  //     "stack": "1",
  //     "backgroundColor": "brown",
  //     "label": "Cloths Sale",
  //     "data": [
  //       200,
  //       300
  //     ]
  //   },
  //   {
  //     "stack": "1",
  //     "backgroundColor": "purple",
  //     "label": "Cloths Revenue",
  //     "data": value
  //   }]
  // }
  const dispatch = useBarChartData('http://localhost:8080/data')
  const barChartData = useSelector((state) => state.dataReducer.barChartData)
  const [loading, setLoading] = useState(true)
  console.log(barChartData)
  useEffect(() => {
    if (barChartData.labels <= 0) {
      dispatch()
      setLoading(false)
    } else {
      setLoading(true)
    }
    // dispatch()
  }, [barChartData, dispatch])
  const [horizontal, setHorizontal] = useState(true)
  const changeToHorizontalBar = () => {
    if (horizontal) {
      setHorizontal(false)
    } else {
      setHorizontal(true)
    }
  }

  if (!loading) {
    return <div hidden={loading}>Loading...</div>
  } else {
    return (<>
      <div hidden={!horizontal}><Bar data={barChartData} /></div>
      <div hidden={horizontal}><HorizontalBar data={barChartData} width={150} height={50} /></div>

      <button onClick={changeToHorizontalBar}>Change to Vertical Bar/Horizontal Bar</button>
    </>)

  }
}