import { View, Text } from 'react-native'
import React from 'react'
import PieChartProps from '@/model/PropHelpers/PieChartProps'
import { PieChart } from 'react-native-chart-kit'
import { Pie } from "victory-native";


const PieCart = (props: PieChartProps) => {
  const colors = [
    '#FF6384', // Example color 1
    '#36A2EB', // Example color 2
    '#FFCE56', // Example color 3
    '#4BC0C0', // Example color 4
    '#9966FF', // Example color 5
  ];
  const dataWithColors = props.data.map((item, index) => ({
    ...item,
    color: colors[index % colors.length], // Cycle through colors if there are more segments than colors
  }));
  return (
    
      <PieChart
        data={dataWithColors}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: '#1E2923',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: '#08130D',
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    
  
  )
}

export default PieCart