import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Product } from './Product'

const Hunting = () => {
  return (
    <>
    <Navbar />
    <Product endpoint={"hunting"} categories={["archery", "trap", "knife"]}/>
    <Footer />
  </>
  )
}

export default Hunting