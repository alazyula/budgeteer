import { View } from 'react-native'
import { useState, useEffect } from 'react';
import { Button, Surface, TextInput, Text } from 'react-native-paper'
import styles from '@/stylesheets/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { createNewExpanse } from '@/firebaseFunctions/Firestore/Expanses/createNewExpanse';
import { auth } from '@/firebase';
import PayerProp from '@/model/PropHelpers/PayerProp';
import { getUserNameById } from '@/firebaseFunctions/Firestore/User/getUserNameById';
const AddNewExpanse = (props: PayerProp) => {
    const [payerName, setPayerName] = useState('');
    const [expanseName, setExpanseName] = useState('');
    const [expanseAmount, setExpanseAmount] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Diğer');
    const [items, setItems] = useState([
        {label: 'Kira', value: 'Kira'},
        {label: 'Fatura', value: 'Fatura'},
        {label: 'Yeme İçme', value: 'Yeme İçme'},
        {label: 'Ulaşım', value: 'Ulaşım'},
        {label: 'Konaklama', value: 'Konaklama'},
        {label: 'Teknoloji', value: 'Teknoloji'},
        {label: 'Eğitim', value: 'Eğitim'},
        {label: 'Diğer', value: 'Diğer'},

       


    ]);
  return (
    <Surface style={styles.outerContainer}>
      <Text
        variant='headlineLarge' 
        style={styles.titleWithoutHeader}>Yeni Harcama Ekleyin</Text>
      <TextInput
        label='Harcama Adı'
        value={expanseName}
        mode='outlined'
        onChangeText={  setExpanseName }
        style={styles.InnerItemMedium}
        />
       <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={'Kategori Seçiniz'}
                    style={styles.InnerItemMedium}
                />
    <TextInput
        label='Harcama Miktarı'
        value={expanseAmount}
        mode='outlined'
        onChangeText={ setExpanseAmount }
        style={styles.InnerItemMedium}
        />



    <Button
        mode="contained"
        onPress={() => createNewExpanse(value,expanseName, parseInt(expanseAmount), new Date().toISOString(), props.id, props.username, auth.currentUser!.uid)}
        style={styles.InnerItemMedium}
        >
        Kaydet </Button>    


    </Surface>
  )
}

export default AddNewExpanse