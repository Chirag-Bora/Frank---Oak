import React from 'react'
import { CiHeart } from "react-icons/ci";
import Header from '../pages/Common/Header';

function ProductDetails({ image, overlayimg, text, spantext, price, colour }) {
    return (
        <>

            <div className='my-3 product_main_parent custom-size'>
                <div className='overlay_main product'>
                    <div className='product_category_image '>
                        <img src={image} />
                        <span className='season_new'> {spantext} </span>
                    </div>
                    <div className='seasons_category_text pt-3'>
                        {text}
                        <CiHeart className='fs-5' />
                    </div>
                    <div className='seasons_category_text'>
                        {price}
                    </div>
                    <div className='seasons_category_text'>
                        {colour}
                    </div>
                </div>

                <div className='overlay_hover'>
                    <div className='product_category_image '>
                        <img src={overlayimg} />
                        <div className='ouickadd'>
                            Quick Add
                            <div className='sizeoverlay'>
                                <div className='d-flex py-2 justify-content-around '>
                                    <div className="sizeicon">XXS</div>
                                    <div className="sizeicon">XS</div>
                                    <div className="sizeicon">S</div>
                                    <div className="sizeicon">M</div>
                                    <div className="text-decoration-none sizeicon">L</div>
                                </div>
                                <div className='d-flex py-2 justify-content-around '>
                                    <div className="sizeicon text-decoration-none">XL</div>
                                </div>
                            </div>
                        </div>
                        <span className='season_new'> {spantext} </span>
                    </div>
                    <div className='seasons_category_text pt-3'>
                        {text}
                        <CiHeart className='fs-5' />
                    </div>
                    <div className='seasons_category_text'>
                        {price}
                    </div>
                    <div className='seasons_category_text'>
                        <div className='mainCirlce'>
                            <span className='subCircle'></span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails