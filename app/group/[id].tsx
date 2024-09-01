import { View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import { useEffect,useState } from 'react'
import useRouteParameter from '@/hooks/useRouteParameter'
import { fetchGroupById } from '@/firebaseFunctions/Firestore/Groups/fetchGroupById'
import Group from '@/model/Group'
import { Surface } from 'react-native-paper'
import styles from '@/stylesheets/styles'
import ExpanseDataTable from '@/components/Groups/Expanses/ExpanseDataTable'
import { Button } from 'react-native-paper'
import { router } from 'expo-router'
import ExpanseWrapper from '@/components/Groups/Expanses/ExpanseWrapper'
const Id = () => {

    const id = useRouteParameter();
    const [group, setGroup] = useState<Group | null>(null);
    useEffect(()=>{

        async function fetchGroup(){
            const group = await fetchGroupById(id) as Group;
            if (group) {
              setGroup(group);
              console.log(group);
            } else {
              setGroup(null);
              console.log("Group not found");
            }
        }

        fetchGroup();
       
    },[])


  return (
    <Surface style = {styles.outerContainer}>
      <Text variant="headlineLarge" style = {styles.titleWithoutHeader}> {group?.name}</Text>
      <ExpanseWrapper/>

     
    </Surface>
  )
}

export default Id