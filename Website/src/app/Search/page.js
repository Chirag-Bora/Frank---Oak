'use client'
import React from 'react';
import '../globals.css';
import '../media.css';
import { GoArrowRight } from "react-icons/go";

function SearchPage() {
  return (
    <>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between py-2 px-4 border border-1 border-danger'>
          <input className='w-75 py-2 border border-0 searchInput' placeholder="Search" />
          <button className='btn px-3 btn-outline-dark rounded-pill'> <GoArrowRight /> </button>
        </div>
        <div className='row'>
          <div className='col-2 border border-1 border-danger' style={{height: '500px'}}>

          </div>
          <div className='col-10 border border-1 border-danger' style={{height: '500px'}}>

          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage