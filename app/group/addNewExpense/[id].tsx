import { View, Text } from 'react-native'
import React from 'react'
import AddNewExpanse from '@/components/Groups/Expanses/AddNewExpanse'
import { Surface } from 'react-native-paper'
import styles from '@/stylesheets/styles'
import { useEffect, useState } from 'react'
import useRouteParameter from '@/hooks/useRouteParameter'
import { auth } from '@/firebase'
import { getUserNameById } from '@/firebaseFunctions/Firestore/User/getUserNameById'

const Id = () => {
  const id = useRouteParameter()
  const [payerName, setPayerName] = useState('')

  useEffect(() => {
    async function fetchPayerName() {
       const name = await getUserNameById(auth.currentUser!.uid);
       setPayerName(name);
     }
     fetchPayerName();
   },[])
  
  return (
    <Surface style = {styles.outerContainer}>
      <AddNewExpanse id = {id} username = {payerName} />
    </Surface>
  )
}

export default Id