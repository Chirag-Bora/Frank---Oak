'use client'
import React from 'react'
import "../../globals.css";
import Menu from '../menu';
import TruncatedText from './TruncatedText';
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

          <div className='col-lg-3  '>
          <Menu/>
          </div>

          <div className='col-lg-9'>
            <h3 className='text-center py-3'>Orders</h3>

            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Des</th>
                  <th scope="col">Status</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>001</td>
                  <td>The Open Back Poplin Maxi Dress in Sepia</td>


                  <td>  
                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                  </td>
                  <td>On Way</td>

                  <td>
                    <button className='btn btn-primary'>View</button>
                  </td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  )
}
