import React from 'react'
import MegaMenu from '../components/MegaMenu'
import allProducts from '../components/fakeData/allProducts.json'
import ProductCard from '../components/ProductCard'
import '../components/styles/home.scss'
const Home = () => {
  return (
    <div className='home-container'>
      {allProducts.map((a)=>(
      <ProductCard product={a} key={a.id}/>
      ))}
    </div>
  )
}

export default Home
