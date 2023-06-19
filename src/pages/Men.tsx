import React from 'react'
import allProducts from '../components/fakeData/allProducts.json'
const Men = () => {
    const menProducts = allProducts.filter((item)=> item.category === "men's clothing")
    console.log(menProducts)
  return (
    <div>
      {menProducts.map((a)=>(
        <div>{a.title}</div>
      ))}
    </div>
  )
}

export default Men
