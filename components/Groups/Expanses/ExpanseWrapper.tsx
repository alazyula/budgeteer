
import { View, Text} from 'react-native'
import { Button } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import { getExpansesByGroupId } from '@/firebaseFunctions/Firestore/Expanses/getExpanses';
import useRouteParameter from '@/hooks/useRouteParameter';
import Expense from '@/model/Expanse';
import ExpanseDataTable from './ExpanseDataTable';
import { Surface } from 'react-native-paper';
import styles from '@/stylesheets/styles';
import { router } from 'expo-router';
import { saveXLSX } from '@/helperFunctions/exportExpansesToExcel';

const ExpanseWrapper = () => {

    const [expanses, setExpanses] = useState<Expense[]>([])
    const id = useRouteParameter();

    useEffect(() => {
      async function fetchdata() {
        const expenseArray = await getExpansesByGroupId(id)
        setExpanses(expenseArray)
        console.log(expanses)

      }
      fetchdata();
    }   , [])
  return (
    <>
      <ExpanseDataTable expenses={expanses}/>
      <Button
        onPress={() => router.push(`/group/addNewExpense/${id}`)}
        mode="contained"
        style={styles.InnerItemMedium}>
        Yeni Harcama Ekle
      </Button>
      <Button
        onPress={() => router.push(`/group/analytics/${id}`)}
        mode="contained"
        style={styles.InnerItemMedium}>
        Harcama Analizi
      </Button>
      <Button
        onPress={() => saveXLSX(expanses, `${id}_expanses`)}
        mode="contained"
        style={styles.InnerItemMedium}>
        Dışa Aktar
      </Button>

      
    </>
  )
}

export default ExpanseWrapper