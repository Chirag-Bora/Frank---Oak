import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import axios, { toFormData } from 'axios';

import { Pagination } from "flowbite-react";

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ViewCategory() {

  const [categories, setCategories] = useState([]);

  const [checkBoxValue, setCheckBoxValue] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [status, setStatus] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);


  const selectHandler = (id) => {
    if(checkBoxValue.includes(id)){
      const data  = checkBoxValue.filter((v,i) => {
        if(v != id){
          return v;
        }
      })
      setCheckBoxValue([...data]);
    } else {
      setCheckBoxValue([...checkBoxValue, id]);
    }
   
  }

  const allCheckBoxSelect = () => {

    if(checkBoxValue.length != categories.length){
      const data = [];
      categories.forEach((v) => {
        data.push(v._id);
      })
      setCheckBoxValue([...data]);
    } else {
      setCheckBoxValue([]);
    }
  }


  const deleteAll = () => {

    console.log(checkBoxValue);
    if(confirm('Are you sure you want to delete ?')){
        axios.post('http://localhost:4000/api/admin/categories/delete', toFormData({
          id : checkBoxValue
        }))
        .then((success) => {
          if(success.data.status == true){
            setStatus(!status);
            setCheckBoxValue([]);
            toast.success(success.data.message);
          } else {
            toast.error(success.data.message);
          }
        }).catch((error) => {
            toast.error('Something went wrong !!');
        })
    }
  }

  const changeStatus = () => {
    
        axios.post('http://localhost:4000/api/admin/categories/change-status', toFormData({
          _id : checkBoxValue
        }))
        .then((success) => {
          if(success.data.status == true){
            setStatus(!status);
            setCheckBoxValue([]);
            toast.success(success.data.message);
          } else {
            toast.error(success.data.message);
          }
        }).catch((error) => {
            toast.error('Something went wrong !!');
        })
    
  }

  useEffect(() => {
    axios.post('http://localhost:4000/api/admin/categories',{page : currentPage, limit : 9})
      .then((success) => {
        if(success.data.status == true){
          setCategories(success.data.data)
        } else {
          setCategories([]);
        }
      }).catch((error) => {
          toast.error('Something went wrong !!');
      })
  },[currentPage,status]);

  return (
    <section className="w-full">
      <Breadcrumb path={"Parent Category"} path2={"View Category"} slash={"/"} />
      <div className="w-full min-h-[610px]">
      <div className="max-w-[1220px] mx-auto py-5">
        <button
            type="button" onClick={deleteAll}
            className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
            Delete
        </button>

        <button
            type="button" onClick={changeStatus}
            className="ms-3 focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
            Change Status
        </button>
      </div>
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            View Category
          </h3>
          <div className="border border-t-0 rounded-b-md border-slate-400">
            <div className="relative overflow-x-auto">
              <table className="w-full  text-left rtl:text-right text-gray-500 ">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3" width="100px">
                      <input name='deleteCheck' id="purple-checkbox" onChange={ allCheckBoxSelect}  checked = {checkBoxValue.length  == categories.length ? true : ''} type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 " />
                      Select All
                    </th>
                    <th scope="col" className="px-6 py-3" width="100px">
                      S. No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3" width="100px">
                      Order
                    </th>
                    <th scope="col" className="px-6 py-3" width="100px">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3" width="100px">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (categories.length > 0) 
                    ?
                    categories.map((v,i) => {
                        return(
                          <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap ">
                              <input name='deleteCheck' id="purple-checkbox" onClick={ () => selectHandler(v._id) }   checked = {checkBoxValue.includes(v._id) ? true : ''} type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 "
                              
                              />
                            </th>
                            <td className="px-6 py-4">
                              {i+1}
                            </td>
                            <td className="px-6 py-4">
                              {v.name}
                            </td>
                            <td className="px-6 py-4">
                              {v.order}
                            </td>
                            <td className="px-6 py-4">
                              { v.status ? 'Active' : 'Inactive' }
                            </td>
                            <td className="px-6 py-4 flex gap-3 mt-6">
                              <svg fill='red' className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>
                              |
                              <Link to={ `/parent-category/update-category/${v._id}` }>
                                  <svg fill='gold' className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" /></svg>
                              </Link>
                            </td>
                          </tr>
                        )
                    })
                    :
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 text-center" colSpan={6}>
                        No Record Found !!
                      </td>
                    </tr>
                  }
                  
                </tbody>
              </table>
            </div>
            <div className="flex overflow-x-auto sm:justify-center m-4">
              <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}