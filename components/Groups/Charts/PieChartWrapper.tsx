import { View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import PieCart from './PieChart'
import ExpanseDataTableProps from '@/model/PropHelpers/ExpanseProps'
import {useState, useEffect} from 'react'
import PieChartProps from '@/model/PropHelpers/PieChartProps'
import mapDataforPieChart from '@/helperFunctions/mapDataforPieChart'
import DropDownPicker from 'react-native-dropdown-picker'
import { Surface } from 'react-native-paper'
import styles from '@/stylesheets/styles'
const PieChartWrapper = (props: ExpanseDataTableProps) => {
    const [key, setKey] = useState<string>('kategori')
    const [data, setData] = useState<PieChartProps>()
    const [loading, setLoading] = useState<boolean>(true)
    const [open, setOpen] = useState(false)
    useEffect(() => {
     async function fetchData(){
      setLoading(true)
       
      let payload: PieChartProps = mapDataforPieChart(props.expenses, key)
      
      
      setData(payload)
      
      setLoading(false) }
      fetchData()
    }, [props.expenses, key])
  return (
    <View style = {styles.innerContainer}>
      <Text variant="headlineLarge" style = {styles.titleWithoutHeader}>Harcama Analizi</Text>
      <DropDownPicker
        items={[
          {label: 'Kategori', value: 'kategori'},
          {label: 'Kişiler', value: 'kişiler'}
        ]}
        value={key}
        open={open}
        setValue={setKey}
        setOpen={setOpen}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        
        dropDownContainerStyle={{backgroundColor: '#fafafa'}}
      />
      {loading|| !data ? <Text>Loading...</Text> : <PieCart data={data!.data}/>}
    </View>
  )
}

export default PieChartWrapper