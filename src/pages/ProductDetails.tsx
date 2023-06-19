import React from 'react'
import '../components/styles/productDetails.scss'
import allProducts from '../components/fakeData/allProducts.json'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();

  const selectedProduct = allProducts.find(p => p.id.toString() === id);
  return (
    <div className='product'>
      <div className='product-pic'><img src={selectedProduct?.image} /></div>
      
      <div className='details'>
       <p><b>{selectedProduct?.brand}</b></p> 
       <p>{selectedProduct?.title}</p> 
       <p>{selectedProduct?.rating.rate} &#9733; | {selectedProduct?.rating.count} Ratings</p>
       <div className='divider'><hr/></div>
       <p>₹ {selectedProduct?.price} MRP</p>
       <span>inclusive of all taxes</span>
       <div className='btn-div'>
        <button className='addToBag-btn'>ADD TO BAG</button>
        <button className='wishlist-btn'>WISHLIST</button>
       </div>
       <div className='divider'><hr/></div>
       <div className='delivery-options '>
         <h4>DELIVERY OPTIONS</h4>
         <div> <input type='text' placeholder='Enter Pincode'/></div>
        
         <span>Please enter PIN code to check delivery time & Pay on Delivery Availability</span>
         <span>100% Original Products</span>
         <span>Pay on delivery might be available</span>
         <span>Easy 14 days returns and exchanges</span>
         <span>Try & Buy might be available</span>
       </div>
       <div className='best-offers'>
       <h4>BEST OFFERS</h4>
       <div>
        <h5>Best Price: Rs. {selectedProduct?.price}</h5>
        <li>Applicable on: Orders above Rs. {selectedProduct?.price} (only on first purchase)</li>
        <li>Coupon code: MYNTRA400</li>
        <li>check cart for final savings</li>
       </div>
       <h5 className='pink-text'>Terms & Condition</h5>
       <p>Flat Rs 150 Cashback for select users or Up To Rs 500 Cashback on CRED pay transactions.</p>
       <p>Min Spend Rs 1,000. Available only on Android Devices.</p>
       </div>
        </div>
    </div>
  )
}

export default ProductDetails
