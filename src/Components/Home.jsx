import React, { useContext, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import { Store } from './Mycontext';

export default function Home() {
  const { products, addToCart,addtoLike,serachedProduct} = useContext(Store);

  return (
    <div className='text-center'>
      <div className="swiper-container">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        >
          <SwiperSlide>
            <div className='swipercard'>
              <img src="Images/poster-5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swipercard'>
              <img src="Images/poster-2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swipercard'>
              <img src="Images/poster-1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swipercard'>
              <img src="Images/poster-4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swipercard'>
              <img src="Images/poster-3.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className='headings text-center m-5'>Top Picks For You.</h1>
      {
        serachedProduct.length > 0 ? 
        <div className='searched-products'>
          <ul className='products-cont'>
          {serachedProduct.map((product) => (
            <li key={product.id}>
              <div className='product-cont-1'>
                <a href="#"><img src={product.image} alt="" /></a>
              </div>
              <div className='m-2 product-cont-2'>
                <h2>{product.title}</h2>
                <p>RS. {product.price}/-</p>
              </div>
              <div className="item-btn-cont d-flex justify-content-between">
                <button className='add-btn' onClick={() => addToCart(product)}>Add to Bag</button>

                <button onClick={()=>addtoLike(product)} className='like-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
        </div> 

        : 
        
        <div>
        <ul className='products-cont'>
          {products.map((product) => (
            <li key={product.id}>
              <div className='product-cont-1'>
                <a href="#"><img src={product.image} alt="" /></a>
              </div>
              <div className='m-2 product-cont-2'>
                <h2>{product.title}</h2>
                <p>RS. {product.price}/-</p>
              </div>
              <div className="item-btn-cont d-flex justify-content-between">
                <button className='add-btn' onClick={() => addToCart(product)}>Add to Bag</button>

                <button onClick={()=>addtoLike(product)} className='like-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div> 
      }
    </div>
  );
}
