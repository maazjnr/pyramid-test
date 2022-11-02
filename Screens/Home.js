import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Header from '../Components/Header'
import Card from '../Components/Card'
import Categories from '../Components/Categories'
import React from 'react'
import Balance from '../Components/Balance'

const AddProduct = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{backgroundColor: "#fff",
    padding: 10}}>
      <Header/>
      <Card />
      <Categories />
      <Balance />
    </ScrollView>
  )
}

export default AddProduct