import { View, Text } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper'
import { useEffect, useState } from 'react'
import Group from '@/model/Group'
import { fetchGroupsByUser } from '@/firebaseFunctions/Firestore/Groups/fetchGroupsByUser'

 async function GroupsList ( userId: string)  {
    let groups: Group[]
    useEffect( ()=> { 
       async function fetchGroups() {
              groups = await fetchGroupsByUser(userId)
         } 
            fetchGroups() }, []
    )

  return (
    <View>
      <Text>GroupsList</Text>
    </View>
  )
}

export default GroupsList