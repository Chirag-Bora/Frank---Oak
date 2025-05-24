'use client'
import React, { useState } from 'react'
import Header from '../pages/Common/Header';

export default function page() {

    const [paymentMethods, setPaymentMethods] = useState({
        cashOnDelivery: false,
        creditCard: false,
        debitCard: false,
        razorpay: false,
    });


    const handlePaymentMethodChange = (event) => {
        const { name, checked } = event.target;
        setPaymentMethods({
            cashOnDelivery: false,
            creditCard: false,
            debitCard: false,
            razorpay: false,
            [name]: checked,
        });
    };

    return (
        <>
          <Header/>
            <div className="container">
                <div className="py-5 text-center">
                    <h1>Checkout Form</h1>
                </div>
            </div>

            <div className="container">
                <div className="row">


                    <div className="col-md-4 order-2">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your Cart</span>
                            <span className="badge rounded-pill bg-secondary">2</span>
                        </h4>

                        <div className="card p-2">
                            <li className="list-group-item py-3 d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">The Open Back Poplin Maxi Dress in Sepia</h6>
                                    <small className="text-muted">Lorem ipsum, dolor sit</small>
                                </div>
                                <span className="text-muted">$89.97</span>
                            </li>


                            <li className="list-group-item py-3 d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">The Sun Hat in Afterglow</h6>
                                    <small className="text-muted">Lorem ipsum, dolor sit</small>
                                </div>
                                <span className="text-muted">$149.00</span>
                            </li>

                            <div className="card-footer py-3 d-flex justify-content-between">
                                <span>Delivery Charge</span>
                                <strong>$10</strong>
                            </div>



                            <div className="card-footer py-3 d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$248.97</strong>
                            </div>

                            <div className="form-check pt-3">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="cashOnDelivery"
                                    id="cashOnDelivery"
                                    checked={paymentMethods.cashOnDelivery}
                                    onChange={handlePaymentMethodChange}
                                />
                                <label className="form-check-label" htmlFor="cashOnDelivery">
                                    Cash on delivery
                                </label>
                            </div>


                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="creditCard"
                                    id="creditCard"
                                    checked={paymentMethods.creditCard}
                                    onChange={handlePaymentMethodChange}
                                />
                                <label className="form-check-label" htmlFor="creditCard">
                                    Credit card
                                </label>
                            </div>


                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="debitCard"
                                    id="debitCard"
                                    checked={paymentMethods.debitCard}
                                    onChange={handlePaymentMethodChange}
                                />
                                <label className="form-check-label" htmlFor="debitCard">
                                    Debit card
                                </label>
                            </div>


                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="razorpay"
                                    id="razorpay"
                                    checked={paymentMethods.razorpay}
                                    onChange={handlePaymentMethodChange}
                                />
                                <label className="form-check-label" htmlFor="paypal">
                                    Razorpay
                                </label>
                            </div>

                            {(paymentMethods.creditCard || paymentMethods.debitCard || paymentMethods.razorpay) && (
                                <div className='payment'>
                                    <div className="row py-3">
                                        <div className="col mb-4">
                                            <label htmlFor="Card1">Name on card</label>
                                            <input type="text" className="form-control" aria-label="Card1" />
                                            <small className="text-muted">Full name, as displayed on the card</small>
                                        </div>

                                        <div className="col mb-4">
                                            <label htmlFor="Card2">Credit card Number</label>
                                            <input type="text" className="form-control" placeholder="1234-5678-9012" aria-label="Card2" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-3">
                                            <label htmlFor="Card3">Expiry Date</label>
                                            <input type="text" className="form-control" aria-label="Card3" />
                                        </div>

                                        <div className="col mb-3">
                                            <label htmlFor="Card4">CVV</label>
                                            <input type="text" className="form-control" aria-label="Card4" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="d-grid gap-2 py-3">
                                <button className="btn btn-primary btn-lg" type="button">
                                    Continue to Checkout
                                </button>
                            </div>

                        </div>



                    </div>

                    <div className="col-md-8 order-1 pb-4">
                        <h4 className="mb-3">Billing Address</h4>
                        <div className="row">
                            <div className="col mb-4">
                                <label for="First name"> First Name </label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col mb-4">
                                <label for="La\st name"> Last Name </label>
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>

                        <div className="input-group col mb-4">
                            <div className="input-group-text">@</div>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>

                        <div className="mb-4">
                            <label for="email">Email (optional)</label>
                            <input type="text" className="form-control" placeholder="you@example.com" aria-label="email" />
                        </div>

                        <div className="mb-4">
                            <label for="Address">Address</label>
                            <input type="text" className="form-control" placeholder="1234 Main St" aria-label="Address" />
                        </div>

                        <div className="mb-4">
                            <label for="Address2">Address 2 (optional)</label>
                            <input type="text" className="form-control" placeholder="Appartment or suite" aria-label="Address2" />
                        </div>

                        <div className="row">
                            <div className="col">
                                <label for="country">Country</label>
                                <select className="form-select">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col">
                                <label for="state">State</label>
                                <select className="form-select">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col mb-4">
                                <label for="zip">Zip Code</label>
                                <input type="text" className="form-control" aria-label="zip" />
                            </div>

                            <hr className="mb-4" />

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Shipping address is the same as my billing address
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    Save this information for next time
                                </label>
                            </div>

                            <hr className="mb-4" />

                            <textarea className='form-control' placeholder='Any Note delivery'></textarea>


                        </div>

                    


                    </div>
                </div>
            </div>


        </>
    )
}
