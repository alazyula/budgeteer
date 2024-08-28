import { View, Text } from 'react-native'
import React from 'react'
import AddNewGroupScreen from '@/components/Groups/AddNewGroupScreen'
import { Surface } from 'react-native-paper'
const addnewGroup = () => {
  return (
    <Surface>
     <AddNewGroupScreen/>
    </Surface>
  )
}

export default addnewGroup