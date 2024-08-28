import { View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import GroupsList from '@/components/Groups/GroupsList'
import AddNewGroupButton from '@/components/Groups/addNewGroupButton'
import { Surface } from 'react-native-paper'
import styles from '@/stylesheets/styles'
const Id = () => {
  return (
    <Surface style={styles.outerContainer}>
      <Text style={styles.titleWithoutHeader} variant='headlineLarge' >Gruplarım</Text>
      
      <AddNewGroupButton />
    </Surface>
  )
}

export default Id