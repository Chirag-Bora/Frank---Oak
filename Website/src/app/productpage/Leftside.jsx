'use client'

import React, { useState } from 'react'
import ".././globals.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ReactSlider from 'react-slider';


export default function Leftside() {
  const [showMoreColors, setShowMoreColors] = useState(false);

  return (
    <div className="collection-sidebar">
      <div className="collection-sticky-wrapper">
        <div className="collection__breadcrumbs p-4 border-bottom">
          <a className="collection__breadcrumbs__atext-secondary text-decoration-underline">Home</a>
          <span> / </span>
          <a href="" className="collection__breadcrumbs__atext-secondary text-decoration-underline">Women</a>
          <span className="collection__breadcrumbs__title d-block text-dark">New In</span>
        </div>


        <div className="collection-scroll-wrapper">
          <div className="collection__sidebar_filters position-relative z-index-3">

            <div className="group active p-4">
              <h3 className="group-title d-flex justify-content-between align-items-center">
                <span className="title">Subcategory</span>
                <span className="arrow"></span>
              </h3>
              <div className="group-content">
                {['Tops', 'Dresses', 'Shorts', 'Skirts', 'Swimwear', 'Pants', 'Denim', 'Blazers', 'Sweaters', 'Jackets & Coats', 'Accessories'].map((item, index) => (
                  <div className="group-item" key={index}>
                    <div className="group-item-inner">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={item} />
                        <label className="form-check-label">{item}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* <div className="group p-4">
              <h3 className="group-title d-flex justify-content-between align-items-center">
                <span className="title">Size</span>
                <span className="arrow"></span>
              </h3>
              <div className="group-content pb-3">
                {['23', '24', '25', '26', '27', '28', '29', '30', '31', '32'].map((size, index) => (
                  <div className="size-content d-inline-block" key={index}>
                    <button className="size">{size}</button>
                  </div>
                ))}

              </div>

              <div className="group-content pb-3">
                {['XXS', 'XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
                  <div className="size-content d-inline-block" key={index}>
                    <button className="size">{size}</button>
                  </div>
                ))}
              </div>

              <div className="group-content pb-3">
                {['00', '0', '2', '4', '6', '8', '10', '12', '14', '16'].map((size, index) => (
                  <div className="size-content d-inline-block" key={index}>
                    <button className="size">{size}</button>
                  </div>
                ))}
              </div>


              <div className="group-content pb-3">
                {['36', '37', '38', '39', '40', '41'].map((size, index) => (
                  <div className="size-content d-inline-block" key={index}>
                    <button className="size">{size}</button>
                  </div>
                ))}
              </div>


            </div> */}


            {/* <div className="group p-4">
              <h3 className="group-title d-flex justify-content-between align-items-center">
                <span className="title">Colour</span>
                <span className="arrow"></span>
              </h3>
              <div className="group-content">
                {['Black', 'Blue', 'Brown', 'Red', 'White', 'Green', 'Beige', 'Pink', 'Purple', 'Grey', 'Yellow', 'Orange'].slice(0, showMoreColors ? undefined : 10).map((color, index) => (
                  <div className="color-item" key={index}>
                    <div className="d-flex align-items-center">
                      <span className="color border" style={{ backgroundColor: color.toLowerCase() }}></span>
                      <label className="ms-2">{color}</label>
                    </div>
                  </div>
                ))}
                <span className="group-more pointer" onClick={() => setShowMoreColors(!showMoreColors)}>
                  {showMoreColors ? 'View less' : 'View more'}
                </span>
              </div>
            </div> */}

            <div className='mb-4 '>
            <div className=" p-3 fs-5">Range</div>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={10}
              />
            </div>


            


            

          </div>


          
        </div>
      </div>
    </div>


  );

}
