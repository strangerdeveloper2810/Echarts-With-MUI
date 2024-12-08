import React from 'react'
import { Card, CardContent } from '@mui/material'
import ReactECharts from 'echarts-for-react'
import { get, map } from 'lodash'
import { totalRisk } from '../../data'

const TotalRiskChart = () => {
  // Chuẩn bị data cho ECharts
  const chartData = map(get(totalRisk, 'data', []), (item) => ({
    value: get(item, 'risk_level', 0),
    name: get(item, 'name', ''),
  }))

  const options = {
    title: {
      text: 'Risk Level Distribution',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        data: chartData,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
      },
    ],
  }

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', boxShadow: 3 }}>
      <CardContent>
        <ReactECharts
          option={options}
          style={{ height: '400px', width: '100%' }}
        />
      </CardContent>
    </Card>
  )
}

export default TotalRiskChart
