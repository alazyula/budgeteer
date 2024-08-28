
import React from 'react'
import { Button, Surface, Text, TextInput } from 'react-native-paper'
import styles from '@/stylesheets/styles'
import { createNewGroup } from '@/firebaseFunctions/Firestore/Groups/createNewGroup'

const AddNewGroupScreen = () => {
    const [text, setText] = React.useState('');
  return (
    <Surface style={styles.outerContainer}>
      <Text style={styles.titleWithoutHeader} variant='headlineLarge' >Yeni Grup Oluştur</Text>
        <TextInput
            label='Grup Adı'
            mode='outlined'
            style={styles.InnerItemMedium}
            value={text}
            onChangeText={setText} />

        <Button
            mode="contained"
            style={styles.InnerItemMedium}
            onPress={()=>createNewGroup(text)}>
            Oluştur </Button>


    </Surface>
  )
}

export default AddNewGroupScreen