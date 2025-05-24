'use client'
import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from 'react-slick';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function Header() {
    // /////////////////////////////////////////// modal
    const [modalShow, setModalShow] = React.useState(false);

    const router = useRouter();

    var checkLogin = localStorage.getItem('loginUser');

    const [isLogin, setisLogin] = useState(checkLogin ? true : false);

    useEffect(() => {
        if(!isLogin){
            router.push('/');
        }
    },[]);

    const [signUp, UpdateSignUp] = useState(true);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
    return (
        <>
            <ToastContainer/>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content heart">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='text-center fs-4 '>
                                Welcome Back
                            </div>
                            <div className='text-center fs-6 my-3 '>
                                Log in to get access to your member perks.
                            </div>
                            <div className='my-4 py-3 d-flex justify-content-around '>
                                <div className='modalR '>
                                    <div className='text-center modalRimg'>
                                        <img src="/modalimg1.png" alt="" />
                                    </div>
                                    <div className='fw-bold text-center'>
                                        Frank Rewards
                                    </div>
                                    <div className='text-center'>
                                        Earn points. Get rewarded.
                                    </div>
                                </div>
                                <div className='modalR '>
                                    <div className='text-center modalRimg'>
                                        <img src="/modalimg1.png" alt="" />
                                    </div>
                                    <div className='fw-bold text-center'>
                                        Frank Rewards
                                    </div>
                                    <div className='text-center'>
                                        Earn points. Get rewarded.
                                    </div>
                                </div>
                                <div className='modalR '>
                                    <div className='text-center modalRimg'>
                                        <img src="/modalimg1.png" alt="" />
                                    </div>
                                    <div className='fw-bold text-center'>
                                        Frank Rewards
                                    </div>
                                    <div className='text-center'>
                                        Earn points. Get rewarded.
                                    </div>
                                </div>
                            </div>

                            {
                                (signUp) ?

                                    <Login UpdateSignUp={UpdateSignUp} setisLogin={setisLogin} setModalShow = {setModalShow} />
                                    :

                                    <SignUp UpdateSignUp={UpdateSignUp} setisLogin={setisLogin} setModalShow = {setModalShow}/>
                            }



                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid  main fixedMenubar '>
                <div className='row header'>
                    <div className='col-12  text-center py-1 bg-black text-white row1'>
                        New summer must-haves just dropped. <u> Shop Women Shop Men </u>
                    </div>
                    <div className='col-12'>
                        <div className='row '>
                            <div className='col-sm-5 col-6 d-flex align-items-center '>
                                <div className="d-lg-none ps-3 toggleBtn">
                                    <FaBars />
                                </div>
                                <div className='ms-3  py-1 my-1 logo'>
                                    <Link href={'/'}><img src="/logo.png" alt="Logo" /></Link>
                                </div>
                                <div className='d-none d-lg-block w-100 h-100  menubar'>
                                    <ul className='h-100 d-flex justify-content-center align-items-center ps-0 my-0'>
                                        <li className='px-xxl-4 px-xl-3 px-lg-2'>
                                            <span>
                                                Woman
                                                <div className="bottomBorder"></div>
                                            </span>
                                            <div className="row m-0 womanSubmenu">
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'productpage'}> New In </Link></li>
                                                            <li><Link href={'productpage'}> Best Sellers</Link> </li>
                                                            <li> <Link href={'productpage'}>Linen, the febric of summer </Link></li>
                                                            <li><Link href={'productpage'}> The Originals</Link> </li>
                                                            <li><Link href={'productpage'}> Workwear</Link> </li>
                                                            <li><Link href={'productpage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'productpage'}> Gift Cards</Link> </li>
                                                            <li><Link href={'productpage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'productpage'}> New In </Link></li>
                                                            <li><Link href={'productpage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'productpage'}> Linen, the febric of summer </Link></li>
                                                            <li><Link href={'productpage'}> The Originals</Link> </li>
                                                            <li><Link href={'productpage'}> Workwear</Link> </li>
                                                            <li><Link href={'productpage'}>Best of Instagram</Link> </li>
                                                            <li> <Link href={'productpage'}>Gift Cards </Link></li>
                                                            <li><Link href={'productpage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'productpage'}> New In</Link></li>
                                                            <li><Link href={'productpage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'productpage'}> Linen, the febric of summer</Link> </li>
                                                            <li><Link href={'productpage'}> The Originals</Link> </li>
                                                            <li><Link href={'productpage'}> Workwear</Link> </li>
                                                            <li><Link href={'productpage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'productpage'}> Gift Cards </Link></li>
                                                            <li><Link href={'productpage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg1.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> Shorts </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg2.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> T-Shirts & Tops </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='px-xxl-4 px-xl-3 px-lg-2'>
                                            <span>
                                                Men
                                                <div className="bottomBorder"></div>
                                            </span>
                                            <div className="row m-0 womanSubmenu">
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'productpage'}> New In</Link> </li>
                                                            <li><Link href={'productpage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'productpage'}> Linen, the febric of summer </Link></li>
                                                            <li><Link href={'productpage'}> The Originals </Link></li>
                                                            <li><Link href={'productpage'}> Workwear</Link> </li>
                                                            <li><Link href={'productpage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'productpage'}> Gift Cards</Link> </li>
                                                            <li><Link href={'productpage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li> <Link href={'productpage'}> New In</Link> </li>
                                                            <li><Link href={'productpage'}> Best Sellers</Link> </li>
                                                            <li> <Link href={'productpage'}>Linen, the febric of summer </Link></li>
                                                            <li> <Link href={'productpage'}>The Originals </Link></li>
                                                            <li> <Link href={'productpage'}>Workwear </Link></li>
                                                            <li><Link href={'productpage'}> Best of Instagram</Link> </li>
                                                            <li> <Link href={'productpage'}>Gift Cards</Link> </li>
                                                            <li> <Link href={'productpage'}>Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li> <Link href={'productpage'}> New In</Link></li>
                                                            <li><Link href={'productpage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'productpage'}> Linen, the febric of summer</Link> </li>
                                                            <li><Link href={'productpage'}> The Originals</Link> </li>
                                                            <li><Link href={'productpage'}> Workwear</Link> </li>
                                                            <li><Link href={'productpage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'productpage'}> Gift Cards</Link> </li>
                                                            <li><Link href={'productpage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg1.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> Shorts </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg2.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> T-Shirts & Tops </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-7 col-6 d-flex '>
                                <div className='ms-auto shoping d-flex align-items-center fs-3 gap-4 me-4 '>
                                    {/* <CiSearch onClick={() => setModalShow(true)} /> */}
                                    

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />

                                    {
                                        isLogin
                                        ?
                                        <Link href="/dashbord">
                                            <button className='shoppingIcon'>
                                            <FaRegUserCircle />
                                        </button>
                                        </Link>
                                        
                                        :
                                        <button className='shoppingIcon' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <FaRegUserCircle />
                                        </button>
                                    }


                                        
                                        
                            
                                        <button className='shoppingIcon' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <CiHeart />
                                        </button>



                                    <button className='shoppingIcon' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                        <MdOutlineShoppingBag />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ////////////////////////// */}


            {/* //////////////////////// */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <button className='me-2 shoppingIcon' type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <FaArrowLeft />
                    </button>
                    <h6 className="offcanvas-title" id="offcanvasExampleLabel"> Continue Shopping </h6>

                </div>
                <div className="offcanvas-body px-0">
                    <div className='text-center py-1 bg-black text-white fw-bold '>
                        The Summer Sale— Enjoy up to 70% off*.
                    </div>
                    <div className='mt-5 ps-4 py-1  offacnvas_row'>
                        Most popular right now
                    </div>
                    <div className='my-4 '>
                        <Slider {...settings}>
                            <div className='d-flex p-1'>
                                <div className='my-2 sliderImg '>
                                    <img src="/offcanvasSliderimg1.webp" className='w-100 h-100' alt="" />
                                </div>
                                <div className='SliderText '>
                                    <div className='mx-2 my-2 slideTextrow1'>
                                        <div className='slideTextrow1p1 '>
                                            The Open Back Poplin Maxi Dress in Sepia
                                        </div>
                                        <div className='ms-3 '>
                                            <p className='m-0'> $149.00 </p>
                                            <p className='m-0'> $89.97 </p>
                                        </div>
                                    </div>
                                    <div className='mx-2 my-2'>
                                        <select name="" id="">
                                            <option value=""> Select a Size </option>
                                        </select>
                                    </div>
                                    <div className='mx-2 my-2 SliderTextbtn'>
                                        <button> <Link href={'addtocart'}>Add to Cart </Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex p-1'>
                                <div className='my-2 sliderImg '>
                                    <img src="/offcanvasSliderimg1.webp" className='w-100 h-100' alt="" />
                                </div>
                                <div className='SliderText '>
                                    <div className='mx-2 my-2 slideTextrow1'>
                                        <div className='slideTextrow1p1 '>
                                            The Open Back Poplin Maxi Dress in Sepia
                                        </div>
                                        <div className='ms-3 '>
                                            <p className='m-0'> $149.00 </p>
                                            <p className='m-0'> $89.97 </p>
                                        </div>
                                    </div>
                                    <div className='mx-2 my-2'>
                                        <select name="" id="">
                                            <option value=""> Select a Size </option>
                                        </select>
                                    </div>
                                    <div className='mx-2 my-2 SliderTextbtn'>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex p-1'>
                                <div className='my-2 sliderImg '>
                                    <img src="/offcanvasSliderimg1.webp" className='w-100 h-100' alt="" />
                                </div>
                                <div className='SliderText '>
                                    <div className='mx-2 my-2 slideTextrow1'>
                                        <div className='slideTextrow1p1 '>
                                            The Open Back Poplin Maxi Dress in Sepia
                                        </div>
                                        <div className='ms-3 '>
                                            <p className='m-0'> $149.00 </p>
                                            <p className='m-0'> $89.97 </p>
                                        </div>
                                    </div>
                                    <div className='mx-2 my-2'>
                                        <select name="" id="">
                                            <option value=""> Select a Size </option>
                                        </select>
                                    </div>
                                    <div className='mx-2 my-2 SliderTextbtn'>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex p-1'>
                                <div className='my-2 sliderImg '>
                                    <img src="/offcanvasSliderimg1.webp" className='w-100 h-100' alt="" />
                                </div>
                                <div className='SliderText '>
                                    <div className='mx-2 my-2 slideTextrow1'>
                                        <div className='slideTextrow1p1 '>
                                            The Open Back Poplin Maxi Dress in Sepia
                                        </div>
                                        <div className='ms-3 '>
                                            <p className='m-0'> $149.00 </p>
                                            <p className='m-0'> $89.97 </p>
                                        </div>
                                    </div>
                                    <div className='mx-2 my-2'>
                                        <select name="" id="">
                                            <option value=""> Select a Size </option>
                                        </select>
                                    </div>
                                    <div className='mx-2 my-2 SliderTextbtn'>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='offcanvasbottom'>
                        <div className='text-center py-1 my-4 bg-black text-white fw-bold '>
                            Styles going fast, buy yours today!
                        </div>
                        <div className='px-2 py-2 my-2 '>
                            <div className='d-flex mx-4 justify-content-between'>
                                <div> Subtotal (0 items)</div>
                                <div> $0.00 </div>
                            </div>
                            <div className='mx-4 my-2  checkoutbtn'>
                               <Link href="/checkout" > Secure Checkout <CiLock /></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}


function Login({ UpdateSignUp, setisLogin, setModalShow }) {
    const router = useRouter();
    const loginUser = (event) => {
        event.preventDefault();

        axios.post('http://localhost:4000/api/website/user/login', event.target)
        .then((success) => {
            if(success.data.status == true){
                event.target.reset();
                toast.success(success.data.message);
                localStorage.setItem('loginUser', success.data.token);
                setisLogin(true);
                setModalShow(false);
                router.push('dashbord')
            } else {
                toast.error(success.data.message);
            }
        })
        .catch(() => {
            toast.error('Something Went Wrong !!');
        })

    }

    return (
        <>
            <div className='formData mt-5 bg-white'>
                <form action="" onSubmit={ loginUser }>
                    <div className="mb-3">
                        <input type="Email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Email Address" />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <Link href={''} className='fs-6 text-decoration-underline'> Forgot Password ?</Link>
                    </div>
                    <div className="mb-3">
                        <button className='w-100 py-1 bg-black text-white fs-4 fw-bold'> Login </button>
                    </div>
                    <div className="mb-3 text-center">
                        Social login
                    </div>
                    <div className="row m-0 gap-5 justify-content-between mb-3 ">
                        <div className='col py-2 border border-2 border-dark'>
                            <div className='row align-items-center'>
                                <div className='col-3'>
                                    <FaFacebookF />
                                </div>
                                <div className='col-9 modalFormText'>
                                    Sign in with Facebook
                                </div>
                            </div>
                        </div>
                        <div className='col py-2 border border-2 border-dark'>
                            <div className='row align-items-center'>
                                <div className='col-3'>
                                    <FaFacebookF />
                                </div>
                                <div className='col-9 modalFormText'>
                                    Sign in with Facebook
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 text-center">
                        Create an account
                    </div>
                    <div className="mb-3 text-center">
                        Don't have an account?
                        <button className='signUpBtn' onClick={() => UpdateSignUp(false)}>
                            <span className='border-bottom border-black'> Sign up <FaLongArrowAltRight /> </span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

function SignUp({ UpdateSignUp, setisLogin, setModalShow }) {

    const registerUser = (event) => {
        event.preventDefault();

        axios.post('http://localhost:4000/api/website/user/register', event.target)
        .then((success) => {
            if(success.data.status == true){
                event.target.reset();
                toast.success(success.data.message);
                localStorage.setItem('loginUser', success.data.token);
                setisLogin(true);
                setModalShow(false);
            } else {
                toast.error(success.data.message);
            }
        })
        .catch(() => {
            toast.error('Something Went Wrong !!');
        })

    }

    return (
        <>
            <div className='formData mt-5 bg-white'>
                <form action="" onSubmit={ registerUser }>
                    <div className="mb-3 py-3 text-center">
                        Already have an account?
                        <button className='signUpBtn' onClick={() => UpdateSignUp(true)}>
                            <span className='border-bottom border-black'> Log in <FaLongArrowAltRight /> </span>
                        </button>
                    </div>
                    <div class="row g-3 mb-3">
                        <div class="col">
                            <input type="text" name='name' class="form-control" placeholder="Enter name" aria-label="Enter Name" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="number" name='mobile_number' className="form-control" id="formGroupExampleInput" placeholder="Mobile Number" />
                    </div>
                    <div className="mb-3">
                        <input type="Email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Email Address" />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                    </div>
                    {/* <div className="my-3">
                        I shop for
                        <div class="form-check form-check-inline">
                            <input class="form-check-input mx-3" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">Men</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input mx-3" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Women</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input mx-3" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3"> All </label>
                        </div>
                    </div> */}
                    {/* <div className="form-check mb-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        Yes, sign me up to the Frank And Oak newsletter to never miss out on product launches and exclusive promotions.
                    </div> */}
                    <div className="mb-3 mt-5">
                        <button className='w-100 py-1 bg-black text-white fs-4 fw-bold'> Sign Up </button>
                    </div>
                    <div className="mb-3 text-center">
                        Social login
                    </div>
                    <div className="row m-0 gap-5 justify-content-between mb-3 ">
                        <div className='col py-2 border border-2 border-dark'>
                            <div className='row align-items-center'>
                                <div className='col-3'>
                                    <FaFacebookF />
                                </div>
                                <div className='col-9 modalFormText'>
                                    Sign in with Facebook
                                </div>
                            </div>
                        </div>
                        <div className='col py-2 border border-2 border-dark '>
                            <div className='row align-items-center'>
                                <div className='col-3'>
                                    <FaFacebookF />
                                </div>
                                <div className='col-9 modalFormText'>
                                    Sign in with Facebook
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className='modalBottomP'>
                            By joining, you agree to Frank And Oak’s Terms & Conditions and Privacy Policy and to receive Frank And Oak’s electronic communications.
                        </p>
                    </div>

                </form>
            </div>
        </>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Search Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <input type='text' className='w-100 p-2' placeholder='Search Product....' />
            </Modal.Body>
            
        </Modal>
    );
}



export default Header