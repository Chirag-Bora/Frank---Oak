'use client'

import React, { useState } from 'react'
import ".././globals.css";


export default function Leftside() {
  const [showMoreColors, setShowMoreColors] = useState(false);
 
  return (
    <div className="collection-sidebar">
      <div className="collection-sticky-wrapper">
        <div className="collection__breadcrumbs p-4 border-bottom">
          <a className="collection__breadcrumbs__atext-secondary text-decoration-underline">Home</a>
          <span> / </span>
          <a href="" className="collection__breadcrumbs__atext-secondary text-decoration-underline">Women</a>
          <span className="collection__breadcrumbs__title d-block text-dark">Sale</span>
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
            
         
            <div className="group p-4">
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


            </div>
            
            
            <div className="group p-4">
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
            </div>
            
          
            <div className="group p-4">
              <h3 className="group-title d-flex justify-content-between align-items-center">
                <span className="title">Price</span>
                <span className="arrow"></span>
              </h3>
              <div className="group-content">
                {['$0 - $50', '$50 - $100', '$100 - $200', '$200 - $250', '$250 - $500'].map((price, index) => (
                  <div className="group-item" key={index}>
                    <div className="group-item-inner">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={price} />
                        <label className="form-check-label">{price}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            

            <div className="group p-4">
              <h3 className="group-title d-flex justify-content-between align-items-center">
                <span className="title">% Off</span>
                <span className="arrow"></span>
              </h3>
              <div className="group-content">
                {['30% - 40%', '40% - 50%', '50% - 60%', '60% - 70%', '70% - 80%'].map((discount, index) => (
                  <div className="group-item" key={index}>
                    <div className="group-item-inner">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={discount} />
                        <label className="form-check-label">{discount}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
      
          <ul className="collection-sidebar__list p-4">
            <li>
              <h3 className="p-2 font-weight-500 fs-6">Featured</h3>
              <ul>
                {['New In', 'Best Sellers', 'Linen, the fabric of summer', 'The Originals', 'Workwear', 'Best of Instagram', 'Sale'].map((item, index) => (
                  <li className="p-2 collection-sidebar__list-group-item" key={index}>
                    <a  className={`collection-sidebar-a${item === 'Sale' ? 'is-active' : ''}`}>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>


      
            <li className="collection-sidebar__list-group">
              <h3 className="p-2 font-weight-bold py-3">Clothing</h3>
              <ul>
                {['Shop All', 'T-shirts & Tops', 'Blouses & Shirts', 'Dresses & Jumpsuits', 'Skirts & Shorts', 'Swimwear', 'Matching Sets', 'Sweaters & Cardigans', 'Blazers & Overshirts', 'Jackets & Coats', 'Denim', 'Pants'].map((item, index) => (
                  <li className="p-2 collection-sidebar__list-group-item" key={index}>
                    <a className="collection-sidebar-link">
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

     
            <li className="collection-sidebar__list-group">
              <h3 className="p-2 font-weight-bold py-3">Accessories</h3>
              <ul>
                {['Shop All', 'Caps & Hats', 'Shoes & Boots', 'Bags'].map((item, index) => (
                  <li className="p-2 collection-sidebar__list-group-item" key={index}>
                    <a  className="collection-sidebar-link">
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>


  );

}
