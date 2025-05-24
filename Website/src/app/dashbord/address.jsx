'use client'
import React from 'react'
import ".././globals.css";
import Header from '../pages/Common/Header';

export default function address() {
    return (
        <>

            <div className='border-bottom'>
                <h3 className='fw-500 text-center py-2'>Add Shiping Address</h3>

                <div className='add-shiping'>
                    <form className="container p-4 mb-5 shadow rounded">
                        <div className="col-lg-12 mb-4 row">
                            <div className="col-md-6">
                                <label htmlFor="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstname" value="John" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastname" value="Lute" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="address" className="form-label">Shipping Address</label>
                            <textarea className="form-control" id="address" rows="3"></textarea>
                        </div>

                        <div className="mb-4 row">
                            <div className="col-md-4">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country">
                                    <option selected>--Select Country--</option>
                                    <option>India</option>
                                    <option>Pakistan</option>
                                    <option>Sri Lanka</option>
                                    <option>China</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state">
                                    <option selected>--Select State--</option>
                                    <option>Rajasthan</option>
                                    <option>Gujarat</option>
                                    <option>Maharashtra</option>
                                    <option>Punjab</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="city" className="form-label">City</label>
                                <select className="form-select" id="city">
                                    <option selected>--Select City--</option>
                                    <option>Jaipur</option>
                                    <option>Jodhpur</option>
                                    <option>Bikaner</option>
                                    <option>Barmer</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="zip" className="form-label">Zip/Pincode</label>
                            <input type="text" className="form-control" id="zip" />
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary">Add Shipping</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
