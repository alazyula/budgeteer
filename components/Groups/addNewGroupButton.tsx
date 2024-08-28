import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { router } from 'expo-router';

const AddNewGroupButton = () => (
  <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => router.push('/addnewGroup')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default AddNewGroupButton;