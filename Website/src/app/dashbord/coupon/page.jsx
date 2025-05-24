'use client'
import React, { useState } from 'react'
import "../../globals.css";
import Menu from '../menu';
import Header from '@/app/pages/Common/Header';


export default function page() {

  const [coupon, setCoupon] = useState('');

  const generateCoupon = (event) => {
    event.preventDefault();
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCoupon(result);
  };

  return (
    <>
    <Header/>
      <div className='container-fluid bg-black py-2 mb-3'>
        <div>
          <span className='offer-title'>Buy 3+ items, get an extra 15% off*</span>
          <span className='offer-subtitle'>Automatically applied at checkout</span>
        </div>
      </div>



      <div className='container-fluid'>

        <div className='row pb-5'>

          <div className='col-lg-3  '>
            <Menu />
          </div>

          <div className='col-lg-9'>
            <h3 className='text-center py-3'>Coupon Genrate</h3>

            <div>
              <form>
                <input type="text" value={coupon} />
                <button className='btn btn-primary ms-5' onClick={generateCoupon}>Generate Coupon</button>

                <div className='my-5'>
                  <label>
                    <span>Uses Per limits</span></label>
                  <input className='ms-3' type="number" />

                  <label className='ms-3'>
                    <span>Minmum expend</span></label>
                  <input className='ms-3' type="number" />

                  <label className='ms-3'>
                    <span>User limits</span></label>
                  <input className='ms-3' type="number" />

                </div>


                <div className='my-5'>
                  
                </div>

                <div className='my-5'>
                  <button className='btn btn-primary button-add'>Add Coupon</button>

                </div>

              </form>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
