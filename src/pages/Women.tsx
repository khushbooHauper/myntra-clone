import React from 'react'
import allProducts from '../components/fakeData/allProducts.json'
const Women = () => {
    const WomenProducts = allProducts.filter((item)=> item.category === "women's clothing")
    console.log(WomenProducts)
  return (
    <div>
      {WomenProducts.map((a)=>(
        <div>{a.title}</div>
      ))}
    </div>
  )
}

export default Women
