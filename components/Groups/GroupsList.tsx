import { View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import { List, Surface } from 'react-native-paper'
import { useEffect, useState } from 'react'
import Group from '@/model/Group'
import { fetchGroupsByUser } from '@/firebaseFunctions/Firestore/Groups/fetchGroupsByUser'
import { FlatList } from 'react-native'
import { router } from 'expo-router'
import styles from '@/stylesheets/styles'
import useRouteParameter from '@/hooks/useRouteParameter'

  function GroupsList ()  {
    let groups: Group[]
    const [data, setData] = useState<Group[]>([])
    const id = useRouteParameter();
    useEffect( ()=> { 
       async function fetchGroups() {
              groups = await fetchGroupsByUser(id)
              setData(groups);
              
         } 
            fetchGroups() }, []
    )

  return (
    <Surface style = {styles.outerContainer}>


     

<FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <List.Item
        title={item.name}
        
        onPress={() =>  router.push(`/group/${item.id}`)}
      />
    )}
  />


      </Surface>
  )
}

export default GroupsList