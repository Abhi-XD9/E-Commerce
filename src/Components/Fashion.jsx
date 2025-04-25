import React, { useContext} from 'react'
import { Store } from './Mycontext'
export default function Fashion() {
  const{products,addToCart,addtoLike} = useContext(Store)
  const filtered = products.filter((product)=>{
    return product.category === "women's clothing"  ||  product.category === "men's clothing" 
  })


  return (
    <div>
      <div className=" fashion conatiner text-center">
        <h1> FASHION </h1>
        <p> Fashion is a form of self-expression and autonomy.</p>
      </div>
      <div>
      <div  className='text-center'>
        <ul className='products-cont'>
          {filtered.map((product) => (
            <li key={product.id}>
              <div className='product-cont-1'>
                <a href="#"><img src={product.image} alt="" /></a>
              </div>
              <div className='m-2 product-cont-2'>
                <h2>{product.title}</h2>
                <p>RS. {product.price}/-</p>
              </div>
              <div className="item-btn-cont d-flex justify-content-between">
                <button className='add-btn'onClick={() => addToCart(product)}>Add to Bag</button>
                <button className='like-btn' onClick={()=>addtoLike(product)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  )
}
