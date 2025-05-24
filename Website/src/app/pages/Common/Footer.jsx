import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='container-fluid border bg-black'>
                <div className='row mx-auto footer'>
                    <div className='col-12 footer_row1'>
                        <div className='row justify-content-around'>
                            <div className='col-md-2 col-sm-4 col-5 my-md-5 my-2 footer_row1_c'>
                                <div className='pb-4 footer_row1_c_img'>
                                    <img src="/cart.png" className='mx-3' />
                                </div>
                                <div className='pb-2 footer_row1_l1'>
                                    Free Shipping
                                </div>
                                <div className='pb-2 footer_row1_l2'>
                                    On orders over $79.
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-4 col-5 my-md-5 my-2 footer_row1_c'>
                                <div className='pb-4 footer_row1_c_img'>
                                    <img src="/loading.png" className='mx-3' />
                                </div>
                                <div className='pb-2 footer_row1_l1'>
                                    Free Returns
                                </div>
                                <div className='pb-2 footer_row1_l2'>
                                    Only keep what you love.
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-4 col-5 my-md-5 my-2 footer_row1_c'>
                                <div className='pb-4 footer_row1_c_img'>
                                    <img src="/loyalty_logo_light.png" className='mx-3' />
                                </div>
                                <div className='pb-2 footer_row1_l1'>
                                    Frank Rewards
                                </div>
                                <div className='pb-2 footer_row1_l2'>
                                    Earn points and get rewards.
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-4 col-5 my-md-5 my-2 footer_row1_c'>
                                <div className='pb-4 footer_row1_c_img'>
                                    <img src="/Sezzle.png" className='mx-3' />
                                </div>
                                <div className='pb-2 footer_row1_l1'>
                                    Buy Now, Pay Later
                                </div>
                                <div className='pb-2 footer_row1_l2'>
                                    Select Klarna at checkout.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 footer_bottom'>
                        <div className='row justify-content-between'>
                            <div className='col-xl-2 col-lg-3 col-sm-4  footer_bottom_c'>
                                <div className='footer_bottom_c1_r1'>
                                    <img src='/fotterimg1.png' />
                                </div>
                                <div className='mt-3 footer_social_icons'>
                                    <CiInstagram />
                                    <FaFacebookF />
                                    <FaTwitter />
                                    <TfiEmail />
                                    <FaLinkedinIn />
                                </div>
                                <div className='mt-5 fotter_bottom_c1_r3'>
                                    <img src="/footerimg2.png" />
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-sm-4  footer_bottom_c'>
                                <div className='footer_heading'>
                                    Our Story
                                </div>
                                <div className='footer_list'>
                                    <ul className='ps-0'>
                                        <li> Who we are </li>
                                        <li> Sustainable practices </li>
                                        <li> Design Ideology </li>
                                        <li> Fabrics </li>
                                        <li> Circular denim™ </li>
                                        <li> Partners and factories </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-sm-4  footer_bottom_c'>
                                <div className='footer_heading'>
                                    Discover
                                </div>
                                <div className='footer_list'>
                                    <ul className='ps-0'>
                                        <li> Who we are </li>
                                        <li> Sustainable practices </li>
                                        <li> Design Ideology </li>
                                        <li> Fabrics </li>
                                        <li> Circular denim™ </li>
                                        <li> Partners and factories </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-sm-4  footer_bottom_c'>
                                <div className='footer_heading'>
                                    Customer Care
                                </div>
                                <div className='footer_list'>
                                    <ul className='ps-0'>
                                        <li> Who we are </li>
                                        <li> Sustainable practices </li>
                                        <li> Design Ideology </li>
                                        <li> Fabrics </li>
                                        <li> Circular denim™ </li>
                                        <li> Partners and factories </li>
                                        <li> Who we are </li>
                                        <li> Sustainable practices </li>
                                        <li> Design Ideology </li>
                                        <li> Fabrics </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-sm-7  footer_bottom_c'>
                                <div className='footer_heading'>
                                    Stay in touch
                                </div>
                                <div className='footer_p1'>
                                    Join our newsletter and stay in the know about new collections, outfit inspiration, sales, and more.
                                </div>
                                <form className='footer_form'>
                                    <input type='email' placeholder='Email' />
                                    <input type='text' placeholder='First Name' />
                                    <div className='footer_form_row'>
                                        <span className='me-2'> I shop for </span>
                                        <div class="form-check mx-1">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Women
                                            </label>
                                        </div>
                                        <div class="form-check mx-1">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Men
                                            </label>
                                        </div>
                                        <div class="form-check mx-1">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                All
                                            </label>
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-light w-100 my-3 py-3'> Subscribe </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer