import { View, Text } from 'react-native'
import React from 'react'
import PieChartProps from '@/model/PropHelpers/PieChartProps'
import { PieChart } from 'react-native-chart-kit';


const PieCart = (props: PieChartProps) => {
  return (
    <View >
        
        <PieChart
            data={props.data}
            width={300}
            height={220}
            chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
        />
  </View>
  )
}

export default PieCart