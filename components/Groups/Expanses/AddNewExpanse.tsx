import { View } from 'react-native'
import { useState } from 'react';
import { Button, Surface, TextInput, Text } from 'react-native-paper'
import styles from '@/stylesheets/styles';
const AddNewExpanse = () => {
    const [expanseName, setExpanseName] = useState('');
    const [expanseAmount, setExpanseAmount] = useState('');
  return (
    <Surface style={styles.outerContainer}>
      <Text
        variant='headlineLarge' 
        style={styles.titleWithoutHeader}>Yeni Harcama Ekleyin</Text>
      <TextInput
        label='Harcama Adı'
        value={expanseName}
        onChangeText={() => { setExpanseName }}
        style={styles.InnerItemMedium}
        />
    
    <TextInput
        label='Harcama Miktarı'
        value={expanseAmount}
        onChangeText={() => { setExpanseAmount }}
        style={styles.InnerItemMedium}
        />



    <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={styles.InnerItemMedium}
        >
        Kaydet </Button>    


    </Surface>
  )
}

export default AddNewExpanse