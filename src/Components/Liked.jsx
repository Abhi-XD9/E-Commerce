import React, { useContext } from 'react'
import { Store } from './Mycontext';


export default function Liked() {
  const { liked, addToCart, removeliked } = useContext(Store);
  console.log(liked);
  return (
    <div>
      <div className=" fashion conatiner text-center">
        <h1> Your Favourites. </h1>
        <p> Buy Them Now  &  Try Them Tommorow. </p>
      </div>
      <div className="fashion container text-center">
        {liked.length <= 0 ? <h2 className="cart-head container text-center">Empty! Like To Add Items.</h2> :
          <div>
            <ul className='cart-prod-cont d-flex flex-column'>
              {liked.map((product) => (
                <li key={product.id} className='d-flex align-items-center'>
                  <div className='product-cont-1'>
                    <a href="#"><img src={product.image} alt="" /></a>
                  </div>
                  <div className='product-cart-2'>
                    <h2>{product.title}</h2>
                    <p>RS. {product.price}/-</p>
                  </div>
                  <div className='btn-cont d-flex'>
                    <div className='addbtn-cont'>
                      <button className='add-btn' onClick={() => addToCart(product)} >Add To Cart</button>
                    </div>
                    <button className='btn-1' onClick={() => removeliked(product.id)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}
