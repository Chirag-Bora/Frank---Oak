'use client'
import React from 'react'
import "../../globals.css";
import Menu from '../menu';
import Header from '@/app/pages/Common/Header';


export default function page() {
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

          <div className='col-lg-3'>
       <Menu/>
          </div>

          <div className='col-lg-9'>
            <h3 className='text-center py-3'>Change Password</h3>

            <form className='algin-center'>
                    <div className='my-5'>
                        <label>
                            <span>Name</span></label>
                        <input className='ms-3' type="text" id="firstname" value="John" disabled/>

                        <label className='ms-3'>
                            <span>Email</span></label>
                        <input className='ms-3' type="email" id="email" value="abc@gmail.com" disabled/>
                    </div>

                    <div className='my-5'>
                        <label>
                            <span>New Password</span></label>
                        <input className='ms-3' type="password" id="firstname" value="John@123"/>

                        <label className='ms-3'>
                            <span>Confirm Password</span></label>
                        <input className='ms-3' type="password" id="firstname" />
                    </div>

                   


                    <div className='my-5'>
                        <button className='btn btn-primary button-add'>Change Password</button>
                       
                    </div>


                </form>
          </div>
        </div>

      </div>
    </>
  )
}
