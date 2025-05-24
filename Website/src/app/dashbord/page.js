'use client'
import React, { useEffect, useState } from 'react'
import ".././globals.css";
import Address from './address'
import Menu from './menu';
import Header from '../pages/Common/Header';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { toast } from 'react-toastify';
import Profile from './Profile';
// import { headers } from 'next/headers';


export default function page() {

  const router = useRouter();

  var checkLogin = localStorage.getItem('loginUser');
  const [isLogin, setisLogin] = useState(checkLogin ? true : false);
  
    useEffect(() => {
        if(!isLogin){
            router.push('/');
        }
    },[]);

    const [userData, setUserData] = useState('');


    useEffect(() => {
      axios.post('http://localhost:4000/api/website/user/view-profile','',{
        headers: {
          Authorization:`Bearer ${ checkLogin }`
        }
      })
      .then((success) => {
        if(success.data.status == true){
          setUserData(success.data.data);
          // toast.success(success.data.message);
        } else {
          if(success.data.tokenStatus == false){
            localStorage.removeItem('loginUser')
            setisLogin(false);
            router.push('/')
          } else {
            toast.error(success.data.message);
          }
        }
        console.log(success.data);
      })
      .catch((error) => {
        toast.error('Something Went wrong !!');
      })

    },[])

  const [selectedAddress, setSelectedAddress] = useState('');

  const handleRadioChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <>
    <Header/>
    <div className='container-fluid bg-black py-2 mb-3'>
        <div>
          <span className='offer-title'>Buy 3+ items, get an extra 15% off*</span>
          <span className='offer-subtitle'>Automatically applied at checkout</span>
        </div>
    </div>



    <div className='container-fluid '>

      <div className='row pb-5'>

        <div className='col-lg-3'>
       <Menu/>
        </div>

        <div className='col-lg-9'>
          <Profile userData={userData} checkLogin={checkLogin} setisLogin={setisLogin}/>

          <div className='shipping'>
      <div className='d-flex p-2 border-bottom'>
        <input
          type='radio'
          name='address'
          value='address1'
          checked={selectedAddress === 'address1'}
          onChange={handleRadioChange}
        />
        <p className='ms-3'>
          Rajveer Singh, Wscube Tech, Basker Circle,In,Raj Jodhpur, 342001
        </p>
      </div>

      <div className='d-flex p-2 border-bottom'>
        <input
          type='radio'
          name='address'
          value='address2'
          checked={selectedAddress === 'address2'}
          onChange={handleRadioChange}
        />
        <p className='ms-3'>
        Rajveer Singh, Wscube Tech, Basker Circle, In, Raj Jodhpur, 342001
        </p>
      </div>

      <div className='d-flex p-2 border-bottom'>
        <input
          type='radio'
          name='address'
          value='address3'
          checked={selectedAddress === 'address3'}
          onChange={handleRadioChange}
        />
        <p className='ms-3'>
        Rajveer Singh, Wscube Tech, Basker Circle, In, Raj Jodhpur, 342001
        </p>
      </div>
    </div>
        </div>
      </div>
      
    </div>
    </>
  )
}
