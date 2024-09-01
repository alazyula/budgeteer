import { View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import React from 'react'
import { List, Surface } from 'react-native-paper'
import { useEffect, useState } from 'react'
import Group from '@/model/Group'
import { fetchGroupsByUser } from '@/firebaseFunctions/Firestore/Groups/fetchGroupsByUser'
import { FlatList } from 'react-native'
import { Link, router } from 'expo-router'
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
    contentContainerStyle = {{width: "100%",
    margin: 10,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    gap: 10,
    
    }}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <Link href={`/group/${item.id}`}>
        <Card style = {{width: "100%",
        margin: 10,
        padding: 10,
        elevation: 5,
        flex: 1,
        }}>
          
          <Card.Content>
      <Text style={styles.link} variant="titleLarge">{item.name}</Text>
      
    </Card.Content>
        </Card>
      </Link>


    )}
  />


      </Surface>
  )
}

export default GroupsList