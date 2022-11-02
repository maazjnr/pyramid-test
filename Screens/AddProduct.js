import { View, Text, SafeAreaView } from 'react-native'
import Header from '../Components/Header'
import Card from '../Components/Card'
import Categories from '../Components/Categories'
import React from 'react'

const AddProduct = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#fff"}}>
      <Header/>
      <Card />
      <Categories />
    </SafeAreaView>
  )
}

export default AddProduct