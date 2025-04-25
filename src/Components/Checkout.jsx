import React, { useContext } from 'react'
import { Store } from './Mycontext'

export default function Checkout() {
    const {cartItems} = useContext(Store)
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity,0);
  return (
    <div className='text-center'>
       <div className="main-cont container d-flex justify-content-between">
      <div>
      <form action="" className='form'>
            <div className="d-flex">
               <div className='form-cont-1' >
               <label for="name">First Name:</label>
               <input type="text" className="form-cont-1 form-control" id="name" placeholder="Enter your first name" required/>
               </div>
               <div>
               <label for="name">Last Name:</label>
               <input type="text" className="form-control" id="name" placeholder="Enter your last name" required/>
               </div>
            </div>
            <label htmlFor="mail">Email Id</label>
            <input type="email" className="form-control" id="mail" placeholder="Enter your email id" required/>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" className="form-control" id="phone" placeholder="Enter your phone number" required/>
            <label htmlFor="address">Address</label>    
            <textarea className="form-control" id="address" placeholder="Enter your address" required/>
            <label htmlFor="card">Card Number</label>
            <input type="number" className="form-control" id="card" placeholder="Enter your card number" required/>
            <label htmlFor="cvv">CVV</label>
            <input type="number" className="form-control" id="cvv" placeholder="Enter your cvv" required/>
            <label htmlFor="month">Expiry</label>
            <input type="date" className="form-control" id="month" required/>
            <button className='btn btn-secondary m-2'>Submit</button>
        </form>
      </div>
      <div class="check-cont container text-center mt-5">
    <h1 class=" heading mb-5">Cart Value</h1>
    <div className=''>
        <div className="card-body">
            <div className="d-flex  mb-2">
                <div className="col-8 text-left">
                    <h3 className="card-title mb-0">Cost of Cart</h3>
                </div>
                <div className="col-4 text-right">
                    <p className="card-text mb-0">RS {total}</p>
                </div>
            </div>
            <div className="d-flex mb-2">
                <div className="col-8 text-left">
                    <h3 className="card-title mb-0">Shipping Charges</h3>
                </div>
                <div className="col-4 text-right">
                    <p className="card-text mb-0">RS 30.00</p>
                </div>
            </div>
            <div className="d-flex mb-2">
                <div className="col-8 text-left">
                    <h3 className="card-title mb-0">Discount</h3>
                </div>
                <div className="col-4 text-right">
                    <p className="card-text mb-0">RS 0.00</p>
                </div>
            </div>
            <div className="d-flex justify-content-around mb-2">
                <div className="col-8 text-left">
                    <h3 className="card-title mb-0">CGST</h3>
                </div>
                <div className="col-4 text-right">
                    <p className="card-text mb-0">RS 20.50</p>
                </div>
            </div>
            <div className="d-flex justify-content-around">
                <div className="col-8 text-left">
                    <h3 className="card-title mb-0">SGST</h3>
                </div>
                <div className="col-4 text-right">
                    <p className="card-text mb-0">RS 18.50</p>
                </div>
            </div>
           <div className='d-flex justify-content-evenly'>
           <h2 className=" col-8 text-left mt-4">Total Payable:</h2>
           <h4 className="display-6 mt-3">RS : {total + 30 + 20.50 + 18.50}/-</h4>
           </div>
        </div>

        <div className=" paym-main-cont  mt-5">
      <h2 className='mb-5'>Select Payment Method</h2>
     <div className="paymen-cont container">
     <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentMethod"
          id="upi"
          value="UPI"
        />
        <label className="form-check-label" htmlFor="upi">
          UPI
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentMethod"
          id="netbanking"
          value="Net Banking"
        />
        <label className="form-check-label" htmlFor="netbanking">
          Net Banking
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentMethod"
          id="card"
          value="Card"
        />
        <label className="form-check-label" htmlFor="card">
          Card
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentMethod"
          id="cod"
          value="Cash on Delivery"
        />
        <label className="form-check-label" htmlFor="cod">
          Cash on Delivery (COD)
        </label>
      </div>
     </div>
    </div>
    </div>
</div> 
       </div>
       <button className='btn btn-dark'>Place Order</button>
    </div>
  )
}
