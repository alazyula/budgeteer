import { View, Text } from 'react-native'
import React from 'react'
import { Button, DataTable } from 'react-native-paper'
import Expense from '@/model/Expanse'
import ExpanseProps from '@/model/PropHelpers/ExpanseProps'


const ExpanseDataTable = (props: ExpanseProps) => {
   

  return (
    
<DataTable> 



<DataTable.Header>
<DataTable.Title>Miktar</DataTable.Title>
<DataTable.Title>Açıklama</DataTable.Title>
<DataTable.Title>Kategori</DataTable.Title>
<DataTable.Title>Tarih</DataTable.Title>
<DataTable.Title>İsim</DataTable.Title> 
</DataTable.Header>
{props.expenses.map((expanse) => (
  <DataTable.Row key={expanse.id}>
    <DataTable.Cell>{expanse.amount}</DataTable.Cell>
    <DataTable.Cell>{expanse.description}</DataTable.Cell>
    <DataTable.Cell>{expanse.category}</DataTable.Cell>
    <DataTable.Cell>{expanse.date.substring(0,7)}</DataTable.Cell>
    <DataTable.Cell>{expanse.paidBy}</DataTable.Cell>
  </DataTable.Row>
))}

</DataTable>


       


    
  )
}

export default ExpanseDataTable