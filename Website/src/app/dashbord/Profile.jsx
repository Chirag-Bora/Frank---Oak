'use client'
import React from 'react'
import ".././globals.css";
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Profile({ userData, checkLogin, setisLogin }) {

    const router = useRouter();

    const updateProfile = (event) => {
        event.preventDefault();

        axios.post('http://localhost:4000/api/website/user/update-profile',event.target,{
            headers: {
                Authorization:`Bearer ${ checkLogin }`
            }
            })
            .then((success) => {
            if(success.data.status == true){
                toast.success(success.data.message);
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
    }

    console.log(userData);
    return (
        <>

            <div className='border-bottom'>
                <h3 className='fw-500 text-center py-2'>Profile Update</h3>

                <div className='add-shiping'>
                    <form className="container p-4 mb-5 shadow rounded" onSubmit={updateProfile}>
                        <div className="col-lg-12 mb-4 row">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label"> Name</label>
                                <input type="text" name='name' className="form-control" id="name" defaultValue={userData.name} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label"> Email</label>
                                <input type="email" name='email' className="form-control" id="email" value={userData.email} disabled/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="mobile_number" className="form-label"> Mobile Number</label>
                                <input type="text" name='mobile_number' className="form-control" id="mobile_number" defaultValue={userData.mobile_number} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary">Update Profile</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
