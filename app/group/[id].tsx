import { View, Text } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import useRouteParameter from '@/hooks/useRouteParameter'
import { fetchGroupById } from '@/firebaseFunctions/Firestore/Groups/fetchGroupById'
import Group from '@/model/Group'
import { Surface } from 'react-native-paper'
import styles from '@/stylesheets/styles'

const Id = () => {

    const id = useRouteParameter();
    const [group, setGroup] = useState<Group | null>(null);
    useEffect(()=>{

        async function fetchGroup(){
            const group = await fetchGroupById(id) as Group;
            if (group) {
              setGroup(group);
            } else {
              setGroup(null);
            }
        }

        fetchGroup();
       
    },[])


  return (
    <Surface style = {styles.outerContainer}>
      <Text> {group?.name}</Text>
    </Surface>
  )
}

export default Id