import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '@/firebase'
import { useEffect, useState } from 'react'


const main = () => {
  const [user, setUser] = useState("")
  useEffect(()=> {
    setUser(auth.currentUser?.uid as string)
  },[])


  return (
    <View>
      <Text>{user}</Text>
    </View>
  )
}

export default main

const styles = StyleSheet.create({})