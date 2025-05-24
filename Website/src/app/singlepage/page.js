'use client'

import React, { useState } from 'react'
import ".././globals.css";
import Leftside from './Leftside';
import SeasonsCate from './SeasonsCate';
import ProductDetails from './ProductDetails';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Link from 'next/link';
import Header from '../pages/Common/Header';

export default function page() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Header/>
      <div className='container-fluid bg-black py-2 mb-3 myZindex'>
        <div>
          <span className='offer-title'>Buy 3+ items, get an extra 15% off*</span>
          <span className='offer-subtitle'>Automatically applied at checkout</span>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row justify-content-between'>
          <div className='col-lg-2'>
            <Leftside />
            <div className='pb-3 header-moblie'>
              <div className="collection__breadcrumbs p-3 bg-light">
                <a className="collection__breadcrumbs__atext-secondary text-decoration-underline">Home</a>
                <span> / </span>
                <a href="" className="collection__breadcrumbs__atext-secondary text-decoration-underline">Women</a>
                <span> / </span>
                <a href="" className="collection__breadcrumbs__atext-secondary">Sale</a>
              </div>
            </div>
          </div>

          <div className='col-lg-10'>
            <div className='row img-block pb-4 border'>

              <div className='img-content'>
                <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_Tops_WW_60ddc739-3414-4522-bf88-3b7f4fee11f7_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                <p>Tops from $15</p>
              </div>

              <div className='img-content'>
                <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_skirts_WW_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                <p>Skirts & Shorts from $25</p>
              </div>

              <div className='img-content'>
                <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_Dresses_WW_9414857e-73a4-4539-abb9-173863136525_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                <p>Dresses from $40</p>
              </div>

              <div className='img-content'>
                <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_Swimwear_WW-1_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                <p>Swimwear from $30</p>
              </div>

              <div className='img-content'>
                <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_LastChance_WW_41e939d2-e044-4d55-85f7-7d5cc5ab3e36_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                <p>Last chance</p>
              </div>


            </div>

            <div className='filter-slider'>
              <Slider {...settings}>

                <div className='img-content'>
                  <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_Tops_WW_60ddc739-3414-4522-bf88-3b7f4fee11f7_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                  <p>Tops from $15</p>
                </div>



                <div className='img-content'>
                  <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_skirts_WW_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                  <p>Skirts & Shorts from $25</p>
                </div>



                <div className='img-content'>
                  <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_Dresses_WW_9414857e-73a4-4539-abb9-173863136525_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                  <p>Dresses from $40</p>
                </div>



                <div className='img-content'>
                  <img src='https://www.frankandoak.com/cdn/shop/files/Tile_320x426_Swimwear_WW-1_320x.jpg?v=1718904029&width=320' className='img-fluid' alt='' />
                  <p>Swimwear from $30</p>
                </div>


              </Slider>
            </div>

            <div className='row p-4'>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2120470-002.01_450x.jpg" overlayimg="/2120470-002.02_450x.jpg" text="The Open Back Poplin Maxi Dress in Sepia" spantext="New" price="$149.00" colour="1 Colour"  /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2110351-4AC.02_450x.jpg" text="The Sun Hat in Afterglow" overlayimg="/2220134-4AC.01_450x.jpg" spantext="best seller" price="$39.50" colour="1 Colour" /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2120479-366.01_450x.jpg" text="The Knit Sweater Vest in White" overlayimg="/2120479-366.02_450x.jpg" spantext="best seller" price="$89.50" colour="1 Colour" /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2110350-4AC.01_450x.jpg" text="The Annie Pull On Loose Short in Red Clay" overlayimg="/2110350-4AC.02_be24d2b0-db97-4da0-b8b7-fd8959b5610e_450x.jpg" spantext="New" price="$79.50" colour="1 Colour" /></Link></div>


              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2120477-229.01_450x.jpg" overlayimg="/2120477-229.02_450x.jpg" text="The Open Back Poplin Maxi Dress in Sepia" spantext="New" price="$149.00" colour="1 Colour"  /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="2110351-4AC.01_450x.jpg" text="The Sun Hat in Afterglow" overlayimg="/2110351-4AC.02_450x.jpg" spantext="best seller" price="$39.50" colour="1 Colour" /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2110342-2AC.02_9c6e6493-f57b-4a20-a8a6-1677305c4b6e_450x.jpg" text="The Knit Sweater Vest in White" overlayimg="/2210558-2AC.02_450x.jpg" spantext="best seller" price="$89.50" colour="1 Colour" /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2120479-774.02_450x.jpg" text="The Annie Pull On Loose Short in Red Clay" overlayimg="/2120479-774.01_450x.jpg" spantext="New" price="$79.50" colour="1 Colour" /></Link></div>

              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2120364-003.01_450x.jpg" overlayimg="/2120364-003.02_450x.jpg" text="The Open Back Poplin Maxi Dress in Sepia" spantext="New" price="$149.00" colour="1 Colour"  /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2120485-229.01_450x.jpg" text="The Sun Hat in Afterglow" overlayimg="/2120485-229.02_450x.jpg" spantext="best seller" price="$39.50" colour="1 Colour" /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2230123-002.01_450x.jpg" text="The Knit Sweater Vest in White" overlayimg="/2230123-002.02_450x.jpg" spantext="best seller" price="$89.50" colour="1 Colour" /></Link></div>
              <div className='col-lg-3'><Link href={'singlepage/productdetails'}><ProductDetails image="/2120364-4LR.01_450x.jpg" text="The Annie Pull On Loose Short in Red Clay" overlayimg="/2120364-4LR.02_450x.jpg" spantext="New" price="$79.50" colour="1 Colour" /></Link></div>

                <div className='py-3'>
                  <p className='pagination-number'><span>40</span> of <span>260</span></p>
                  <button className='load-more bg-white'> Load more </button>
                </div>
                
            </div>
          

          </div>
        </div>

      </div>

      <div className='container mx-auto pb-5'>
        <div className='row px-0 mx-auto'>
          <div className='px-0 my-5 feature_heading'>
            Recently Viewed
          </div>
          <div className='row recent-view mx-0 justify-content-center px-0'>
            <SeasonsCate image="/seasons1.jpg" overlayimg="/seasonovarlay1.jpg" text="The Open Back Poplin Maxi Dress in Sepia" spantext="New" price="$149.00" colour="1 Colour" />
            <SeasonsCate image="/seasons2.jpg" text="The Sun Hat in Afterglow" overlayimg="/seasonoverlay2.webp" spantext="best seller" price="$39.50" colour="1 Colour" />
            <SeasonsCate image="/seasons3.jpg" text="The Knit Sweater Vest in White" overlayimg="/seasonoverlay3.jpg" spantext="best seller" price="$89.50" colour="1 Colour" />
            <SeasonsCate image="/seasons4.jpg" text="The Annie Pull On Loose Short in Red Clay" overlayimg="/seasonoverlay4.jpg" spantext="New" price="$79.50" colour="1 Colour" />


          </div>

          <div className='row mx-0 justify-content-center px-0'>

            <div className='filter-slider'>
              <Slider {...settings}>
                <SeasonsCate image="/seasons1.jpg" overlayimg="/seasonovarlay1.jpg" text="The Open Back Poplin Maxi Dress in Sepia" spantext="New" price="$149.00" colour="1 Colour" />
                <SeasonsCate image="/seasons2.jpg" text="The Sun Hat in Afterglow" overlayimg="/seasonoverlay2.webp" spantext="best seller" price="$39.50" colour="1 Colour" />
                <SeasonsCate image="/seasons3.jpg" text="The Knit Sweater Vest in White" overlayimg="/seasonoverlay3.jpg" spantext="best seller" price="$89.50" colour="1 Colour" />
                <SeasonsCate image="/seasons4.jpg" text="The Annie Pull On Loose Short in Red Clay" overlayimg="/seasonoverlay4.jpg" spantext="New" price="$79.50" colour="1 Colour" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>

  );

}
