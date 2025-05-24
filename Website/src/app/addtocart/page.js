'use client'
import { useEffect, useState } from 'react';
import '../globals.css'
import Link from 'next/link';
import Header from '../pages/Common/Header';

export default function page() {

    const [quantity, setQuantity] = useState('1');

  

    const initialCart = [
        {
            id: 1,
            name: 'The Open Back Poplin Maxi Dress in Sepia',
            description: 'Lorem ipsum, dolor sit',
            price: 89.97,
            quantity: 1,
            imageUrl: '/offcanvasSliderimg1.webp'
        },
        {
            id: 2,
            name: 'Title',
            description: 'Lorem ipsum, dolor sit',
            price: 149.00,
            quantity: 1,
            imageUrl: '/2120470-002.01_450x.jpg'
        }
    ];

    const [cartItems, setCartItems] = useState(initialCart);
    const [subtotal, setSubtotal] = useState(0);
    const deliveryCharge = 10; // Assume a fixed delivery charge for simplicity
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubtotal(newSubtotal);
        setTotal(newSubtotal + deliveryCharge);
    }, [cartItems]);

    const increment = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const decrement = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };
    return (
        <>
         <Header/>
            <div className='container border border-1 border-black py-5 my-3'>
            <div className='row justify-content-between'>
                <h4 className='text-center pb-5'>Add To Cart</h4>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-5">
                    {cartItems.map(item => (
                        <div className='py-4' key={item.id}>
                            <div className="d-flex mb-3">
                                <img className="cart-image" src={item.imageUrl} alt="" />
                                <div className="mx-3">
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                    <div className="quantity py-3">
                                        <button onClick={() => decrement(item.id)}>-</button>
                                        <input type="number" value={item.quantity} readOnly />
                                        <button onClick={() => increment(item.id)}>+</button>
                                    </div>
                                    <div><strong>${item.price.toFixed(2)}</strong></div>
                                    <small className="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2">
                                        In Stock
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-lg-4 bg-light rounded-3 p-4 py-5">
                    <h6 className="mb-4">Order Summary</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>Subtotal</div>
                        <div><strong>${subtotal.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <div>Delivery Charge</div>
                        <div><strong>${deliveryCharge.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <div>Total</div>
                        <div><strong>${total.toFixed(2)}</strong></div>
                    </div>
                    <button className="btn btn-primary w-100 mt-4"><Link href={'/checkout'}>Checkout</Link></button>
                </div>
            </div>
        </div>


        </>
    )
}
