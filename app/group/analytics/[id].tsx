import { View, Text } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import PieChartWrapper from '@/components/Groups/Charts/PieChartWrapper'
import styles from '@/stylesheets/styles'
import { useState, useEffect } from 'react'
import { getExpansesByGroupId } from '@/firebaseFunctions/Firestore/Expanses/getExpanses'
import Expense from '@/model/Expanse'
import useRouteParameter from '@/hooks/useRouteParameter'

const Id = () => {
    const [data, setData] = useState<Expense[]>([])
    const id = useRouteParameter()
    useEffect(() => {
      async function  fetchData(){
        console.log("fetchData")
        const response = await getExpansesByGroupId(id)
        setData(response)
      }
      fetchData()
    }, [])

  return (
    <Surface style={styles.outerContainer}>
        <PieChartWrapper expenses={data} />
    </Surface>
  )
}

export default Id