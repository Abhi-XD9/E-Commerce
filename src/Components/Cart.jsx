import React, { useContext } from 'react';
import { Store } from './Mycontext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { cartItems, setCartItems, removeFromCart, updateQuantity } = useContext(Store);

    const navigate = useNavigate()

    const handleDec = (id) => {
        updateQuantity(id, Math.max(1, cartItems.find(item => item.id === id).quantity - 1));
    };

    const handleInc = (id) => {
        updateQuantity(id, cartItems.find(item => item.id === id).quantity + 1);
    };

    const clearCart = () => {
        setCartItems([]);
    }

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log(cartItems)

    return (
        <div className='text-center'>
            <div className=" fashion  text-center">
                <h1> Cart </h1>
            </div>
           <div>
           {cartItems.length <= 0 ? <h1 className="cart-head container text-center">Cart Is Empty! Add The Stuff.</h1> :

<div className='container'>
    <ul className='cart-prod-cont d-flex flex-column'>
        {cartItems.map((product) => (
            <li key={product.id} className='d-flex align-items-center'>
                <div className='product-cont-1'>
                    <a href="#"><img src={product.image} alt="" /></a>
                </div>
                <div className='m-2 product-cart-2 container'>
                    <h2>{product.title}</h2>
                    <p>RS. {product.price}/-</p>
                </div>
                <h3>Cost: RS. {product.price * product.quantity}/-</h3>
                <div className='btn-cont d-flex'>
                    <div className='btn-cont-2'>
                        <button onClick={() => handleDec(product.id)}>-</button>
                        <button className='btn btn-secondary m-1'>{product.quantity}</button>
                        <button onClick={() => handleInc(product.id)}>+</button>
                    </div>
                    <button className='btn-1' onClick={() => removeFromCart(product.id)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg></button>
                </div>
            </li>
        ))}
    </ul>

    <div className='total d-flex align-items-center justify-content-center'> Cart Value :<h1 className='m-2'> RS. {total}/-</h1> </div>

    <div className='buttons-cart d-flex justify-content-between mb-5'>
        <button onClick={clearCart} className='btn btn-dark'>Clear Cart</button>
        <button onClick={() => navigate('/checkout')} className='btn btn-dark'>Proceed to Checkout</button>
    </div>
</div>
}
           </div>
        </div>
    );
}