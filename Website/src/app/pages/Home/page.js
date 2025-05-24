'use client'
import React from 'react';
import '../../globals.css';
import '../../media.css';
import FeatureCate from './FeatureCate';
import SeasonsCate from './SeasonsCate';
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Index() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.08,
        slidesToScroll: 1,
        slidesPerRow: 1
    };
    return (
        <>
            <div className='container-fluid  main'>
                <div className='row'>
                    <div className='col-12 p-0'>
                        <div className='d-flex justify-content-center align-items-center text-white banner'>
                            <div className='w-50'>
                                <div className='py-2 text-center banner_row1'>
                                    A Mallorca Story
                                </div>
                                <div className='py-2 text-center banner_row2'>
                                    Summer 2024
                                </div>
                                <div className='py-3 text-center banner_row3'>
                                    <div className='banner_r3_btn'>
                                        Women
                                    </div>
                                    <div className='banner_r3_btn'>
                                        Men
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 py-2 bg-black'>
                        <div className='row justify-content-center align-items-center py-2 banner_bottom'>
                            <div className='col-lg-2 col-md-4 col-5 d-flex justify-content-center align-items-center my-lg-1 my-2 text-white banner_bottom_row'>
                                <img src="/cart.png" className='mx-xxl-3 mx-2' />
                                Free Shipping over $79
                            </div>
                            <div className='col-lg-2 col-md-4 col-5 d-flex justify-content-center align-items-center my-lg-1 my-2 text-white banner_bottom_row'>
                                <img src="/loading.png" className='mx-xxl-3 mx-2' />
                                Free Returns
                            </div>
                            <div className='col-lg-2 col-md-4 col-5 d-flex justify-content-center align-items-center my-lg-1 my-2 text-white banner_bottom_row'>
                                <img src="/loyalty_logo_light.png" className='mx-xxl-3 mx-2' />
                                Earn Points
                            </div>
                            <div className='col-lg-2 col-md-4 col-5 d-flex justify-content-center align-items-center my-lg-1 my-2 text-white banner_bottom_row'>
                                <img src="/Sezzle.png" className='mx-xxl-3 mx-2' />
                                Buy Now, Pay Later
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row featured_Categories px-0 mx-auto '>
                    <div className='px-0 mt-5  feature_heading'>
                        Featured Categories
                    </div>
                    <div className='row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-1 justify-content-around gap-0 mx-0 px-0 '>
                        <FeatureCate image="/featureCate1.jpg" text="Womens Skirts & Shorts" />
                        <FeatureCate image="/featureCate2.webp" text="Mens Shorts" />
                        <FeatureCate image="/featureCate3.webp" text="Womens T-Shirts & Tops" />
                        <FeatureCate image="/featureCate4.webp" text="Mens Shirts & Polo Shirts" />
                        <FeatureCate image="/featureCate5.webp" text="Womens Swimwear" />
                        <FeatureCate image="/featureCate6.webp" text="Mens Swimwear" />
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row px-0 mx-auto season_must '>
                    <div className='px-0 my-5  feature_heading'>
                        Season's must-haves
                    </div>
                    <div className='row mx-0 justify-content-center px-0 '>
                        <SeasonsCate image="/seasons1.jpg" overlayimg="/seasonovarlay1.jpg" text="The Open Back Poplin Maxi Dress in Sepia" spantext="New" price="$149.00" colour="1 Colour" />
                        <SeasonsCate image="/seasons2.jpg" text="The Sun Hat in Afterglow" overlayimg="/seasonoverlay2.webp" spantext="best seller" price="$39.50" colour="1 Colour" />
                        <SeasonsCate image="/seasons3.jpg" text="The Knit Sweater Vest in White" overlayimg="/seasonoverlay3.jpg" spantext="best seller" price="$89.50" colour="1 Colour" />
                        <SeasonsCate image="/seasons4.jpg" text="The Annie Pull On Loose Short in Red Clay" overlayimg="/seasonoverlay4.jpg" spantext="New" price="$79.50" colour="1 Colour" />
                    </div>
                </div>
            </div>
            
            <div className='container-fluid mt-5 febric'>
                <div className='row justify-content-around h-100 my-5 '>
                    <div className='col-lg-6 order-lg-1 order-2 col-11 h-100 my-4 my-lg-0 p-lg-4 p-1 '>
                        <img src="/febric.webp" />
                    </div>
                    <div className='col-lg-6 col-12 order-lg-1 order-1 d-flex justify-content-around h-100 p-lg-4 p-1 '>
                        <div className='mt-5 febInner'>
                            <div className='mt-5  fibric_text_r1'>
                                <img src='/febric_circle_icon.jpg' />
                            </div>
                            <div className=' fibric_text_r2'>
                                Linen, the fabric of summer
                            </div>
                            <div className=' fibric_text_r3'>
                                Discover a natural material that creates easy-going and breezy styles.
                            </div>
                            <div className='row mx-0 justify-content-between gap-2  fibric_text_r4'>

                                <Slider {...settings}>

                                    <div className='col px-2 febBox'>
                                        <img src='/febimg1.jpg' />
                                    </div>
                                    <div className='col px-2 febBox'>
                                        <img src='/febimg1.jpg' />
                                    </div>
                                    <div className='col px-2 febBox'>
                                        <img src='/febimg1.jpg' />
                                    </div>
                                    <div className='col px-2 febBox'>
                                        <img src='/febimg1.jpg' />
                                    </div>
                                    <div className='col px-2 febBox'>
                                        <img src='/febimg1.jpg' />
                                    </div>
                                    <div className='col px-2 febBox'>
                                        <img src='/febimg1.jpg' />
                                    </div>


                                </Slider>
                            </div>
                            <div className='d-inline-block my-3'>
                                <a href='#' className='pb-1 febNevigate'> Shop Now </a>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='row justify-content-around h-100 my-5 '>
                    <div className='col-lg-6 col-12 d-flex justify-content-around h-100 p-lg-4 p-1 my-4 my-lg-0 '>
                        <div className='mt-5 febInner'>
                            <div className='mt-5  fibric_text_r1'>
                                <img src='/febric_circle_icon.jpg' />
                            </div>
                            <div className=' fibric_text_r2'>
                                Linen, the fabric of summer
                            </div>
                            <div className=' fibric_text_r3'>
                                Discover a natural material that creates easy-going and breezy styles.
                            </div>
                            <div className='row mx-0 justify-content-between gap-2  fibric_text_r4'>
                                <div className='col px-0 febBox'>
                                    <img src='/febricimg.webp' />
                                </div>
                                <div className='col px-0 febBox'>
                                    <img src='/febricimg.webp' />
                                </div>
                                <div className='col px-0 febBox'>
                                    <img src='/febricimg.webp' />
                                </div>
                            </div>
                            <div className='d-inline-block my-3'>
                                <a href='#' className='pb-1 febNevigate'> Shop Now </a>
                            </div>

                        </div>

                    </div>
                    <div className='col-lg-6 col-11 h-100 p-4 '>
                        <img src="/febpart2.webp" />
                    </div>
                </div>
            </div>
            <div className='container-fluid  pb-5 review_bg'>
                <div className='row mx-auto review_sec review_bg'>
                    <div className='col-12 fs-1 py-lg-5 py-md-4 py-sm-3 py-2  text-center'>
                        You didn't hear it from us
                    </div>
                    <div className='col-12 '>
                        <div className='row gap-4 bg-white '>
                            <div className='col review_bg'>
                                <div className='row justify-content-around'>
                                    <div className='col-lg-5 col-11 order-lg-1 order-2  review_text bg-white'>
                                        <div className='h-100  '>
                                            <div className='review_text_r1 '>
                                                <div className='review_text_r1_top'>
                                                    <FaStar className='star mx-1' />
                                                    <FaStar className='star mx-1' />
                                                    <FaStar className='star mx-1' />
                                                    <FaStar className='star mx-1' />
                                                    <FaStar className='star mx-1' />
                                                </div>

                                                <div className='review_text_r1_bottom'> Based on 55 reviews </div>
                                            </div>
                                            <div className=' mt-5 review_text_r2'>
                                                Very flattering cut, comfortable fabric and nice details. Wish I had bought a few of these.
                                            </div>
                                            <div className='my-3 fs-6  review_text_r3'>
                                                Amy H.
                                            </div>
                                            <div className='review_shop_now'>
                                                Shop Now
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-6 col-11 order-lg-1 order-1 review_img'>
                                        <img src="/review_side_img.webp" className='img-fluid h-100' />
                                    </div>
                                </div>
                            </div>
                            <div className='col review_bg'>
                                <div className='row'>
                                    <div className='col-lg-5 col-11 order-lg-1 order-2  review_text bg-white'>
                                        <div className='h-100  '>
                                            <div className='review_text_r1 '>
                                                <div className='review_text_r1_top'>
                                                    <FaStar className='star mx-1' />
                                                    <FaStar className='star mx-1' />
                                                    <FaStar className='star mx-1' />
                                                    <FaStar className='star mx-1' />
                                                    <FaStar className='star mx-1' />
                                                </div>

                                                <div className='review_text_r1_bottom'> Based on 55 reviews </div>
                                            </div>
                                            <div className=' mt-5 review_text_r2'>
                                                Very flattering cut, comfortable fabric and nice details. Wish I had bought a few of these.
                                            </div>
                                            <div className='my-3 fs-6  review_text_r3'>
                                                Amy H.
                                            </div>
                                            <div className='review_shop_now'>
                                                Shop Now
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-6 col-11 order-lg-1 order-1 review_img'>
                                        <img src="/review_side_img.webp" className='img-fluid h-100' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row mx-auto py-lg-5 py-md-4 py-sm-4 py-2 inspire_sec review_bg'>
                    <div className='col-lg-6 inpire_c1 '>
                        <div className='mb-4  inspire_heading'>
                            Inspire Better Living.
                        </div>
                        <div className='mb-5 inpire_p'>
                            Born in Canada, we are grounded on innovation, our community, and respecting the planet we all call home.
                        </div>
                        <div className='inpire_bottom'>
                            Who We Are
                        </div>
                    </div>
                    <div className='col-lg-6 '>
                        <div className='d-flex flex-wrap justify-content-around'>
                            <div className='inpire_img mb-4'>
                                <div className='inspire_img_overlay'>
                                    <div className='inspire_overlay_text'>
                                        Sustainable Practices
                                    </div>
                                </div>
                            </div>
                            <div className='inpire_img mb-4'>
                                <div className='inspire_img_overlay'>
                                    <div className='inspire_overlay_text'>
                                        Design Philosophy
                                    </div>
                                </div>
                            </div>
                            <div className='inpire_img mb-4'>
                                <div className='inspire_img_overlay'>
                                    <div className='inspire_overlay_text'>
                                        Fabrics Innovation
                                    </div>
                                </div>
                            </div>
                            <div className='inpire_img mb-4'>
                                <div className='inspire_img_overlay'>
                                    <div className='inspire_overlay_text'>
                                        Partners and Factories
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index