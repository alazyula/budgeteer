import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '@/components/Auth/LoginForm'
import { Router } from 'expo-router'
import { auth } from '@/firebase'
import { useEffect } from 'react'

const login = () => {

  


  return (
    <View>
      <LoginForm />
    </View>
  )
}

export default login