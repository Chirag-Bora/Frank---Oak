'use client'

import React, { useState } from "react";
import '../../globals.css'
import { CiHeart } from "react-icons/ci";
import SeasonsCate from './SeasonsCate';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Link from 'next/link';
import Header from '@/app/pages/Common/Header';

export default function page() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    var settings_1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    let [bigImg,setBigImag]=useState("/2110351-4AC.01_450x.jpg")

    return (
        <>
            <Header />
            <div className='container-fluid  p-4'>
                <div className='row justify-content-between'>

                    <div className='col-lg-6'>
                        <div className='border text-center '>
                            <img src={bigImg} className='w-100' height={500} />
                        </div>

                        <div className=' product-delails-img justify-content-start '>
                            <Slider {...settings_1}>
                                <div>
                                    <img src='/2120470-002.01_450x.jpg' onClick={()=>setBigImag("/2120470-002.01_450x.jpg")} className='w-100 h-75 ' />
                                </div>
                                <div>
                                    <img src='/2120470-002.01_450x.jpg' onClick={()=>setBigImag("/2120470-002.01_450x.jpg")} className='w-100 h-75 ' />
                                </div>
                                <div>
                                    <img src='/2120470-002.01_450x.jpg' onClick={()=>setBigImag("/2120470-002.01_450x.jpg")} className='w-100 h-75 ' />
                                </div>
                                <div>
                                    <img src='/2120470-002.01_450x.jpg' onClick={()=>setBigImag("/2120470-002.01_450x.jpg")} className='w-100 h-75 ' />
                                </div>
                                <div>
                                    <img src='/2120470-002.01_450x.jpg' onClick={()=>setBigImag("/2120470-002.01_450x.jpg")} className='w-100 h-75 ' />
                                </div>
                                <div>
                                    <img src='/2120470-002.01_450x.jpg' onClick={()=>setBigImag("/2120470-002.01_450x.jpg")} className='w-100 h-75 ' />
                                </div>
                            </Slider>
                            {/* <div className='border m-0 p-0 '>
                               
                            </div>
                            <div className=''>
                                <img src='/2120470-002.01_450x.jpg' className='w-100 h-75 ' />
                            </div>
                            <div className=''>
                                <img src='/2120470-002.01_450x.jpg' className='w-100 h-75 ' />
                            </div>
                            <div className=''>
                                <img src='/2120470-002.01_450x.jpg' className='w-100 h-75 ' />
                            </div> */}

                        </div>
                    </div>
                    <div className='col-lg-6 p-5'>

                        <div className='border-1 border-bottom'>
                            <div className="product-breadcrumb__links">
                                <a href="/">Home</a><span class="slash">/</span><a href="/pages/men">Men</a><span class="slash">/</span><a href="/collections/men-the-stockroom-sale">The Stockroom Sale</a>
                            </div>

                            <h2 className='product-title'>The Owen Linen Short in Twilight Mauve</h2>

                            <div class="product-meta__price">
                                <div class="product-meta__price-container">
                                    <p class="p2 indigo-lt line-through mr">$89.50</p>
                                    <div class="sale-percentage"><p class="p2 sale-bold">-72%</p>
                                    </div>
                                </div>

                                <p class="sale-price js-price-variant">$25.00</p>
                            </div>


                            <p className='product-line'>4 interest-free payments of $29.75 with Klarna.</p>
                        </div>

                        <div className='size-select py-3 border-1 border-bottom'>
                            <div className='d-flex size-box justify-content-between'>
                                <h6>Select a size</h6>
                                <p>Sizing Guide</p>
                            </div>

                            <div className='d-flex size-number justify-content-between'>
                                <button className='size-number-box'>00</button>
                                <button className='size-number-box'>0</button>
                                <button className='size-number-box'>2</button>
                                <button className='size-number-box'>4</button>
                                <button className='size-number-box'>6</button>
                                <button className='size-number-box'>8</button>
                                <button className='size-number-box'>10</button>
                                <button className='size-number-box'>12</button>
                                <button className='size-number-box'>14</button>
                                <button className='size-number-box'>16</button>

                            </div>
                        </div>

                        <div className='d-flex align--center pt-5 pb-3 border-1 border-bottom'>
                            <div className='addcart'>
                                <button className='btn border border-1 '><Link href={'/addtocart'}> Add to Cart</Link></button>
                            </div>

                            <div className='ms-3 wishlist'>
                                <button className='btn border border-1 '>
                                    <CiHeart className='heart-icon' />
                                </button>
                            </div>
                        </div>

                        <div className='overview align--center pt-5 pb-3 border-1 border-bottom'>
                            <h4>Overview</h4>
                            <p>
                                A tailored style designed with your comfort in mind. The Amelia pant features a balloon fit,
                                high waist, and ankle-length hem. Fitted at the hips. Loose at the thighs.
                                Tapered from knee to leg opening. Pleated at the front and the waist. Inseam: 27"".
                            </p>

                            <p>
                                A tailored style designed with your comfort in mind. The Amelia pant features a balloon fit,
                                high waist, and ankle-length hem. Fitted at the hips. Loose at the thighs.
                                Tapered from knee to leg opening. Pleated at the front and the waist. Inseam: 27"".
                            </p>

                        </div>

                        <div className="accordion pt-3" id="accordionExample">

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button acco-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Fit & Sizing
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h4 className='fit_details'>Fit details</h4>
                                        <ul className='fit_list'>
                                            <li>High rise</li>
                                            <li>Relaxed through the hips</li>
                                            <li>Tapered fit leg</li>
                                            <li>Ankle length</li>
                                            <li>27" inseam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button acco-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Material & Care
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <h4 className='fit_details'>Materials</h4>
                                        <ul className='fit_list'>
                                            <li>Machine wash cold delicate cycle</li>
                                            <li>Do not tumble dry</li>
                                            <li>Dry flat</li>
                                            <li>Iron low heat</li>
                                            <li>Do not bleach</li>
                                        </ul>

                                    </div>
                                </div>
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
    )
}
