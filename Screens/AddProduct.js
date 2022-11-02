import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AddProduct = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>AddProduct</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 20
  }
})
export default AddProduct;
