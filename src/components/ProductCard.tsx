import React from 'react'
import './styles/productCard.scss'
import { useNavigate, useParams } from 'react-router-dom'
export type Tproduct = {
    id: number,
     title: string,
     price: number,
      description: string,
       category: string,
        image: string,
        rating: { rate: number, count: number },
         popularity: number
         }
  
const ProductCard = ({ product }: { product: Tproduct }) => {
    const navigate = useNavigate();
    const {id} = useParams();

    const openCard = ()=>{
        navigate(`/product/${product.id}`);
    }
  return (
    <div className='card' onClick={openCard}>
    <img src={product.image}/>
    <div className='card-body'>
    <h5 className='clipped-text'>{product.title}</h5>
    <p>Rs. {product.price}</p>
    </div>
    </div>
  )
}

export default ProductCard
