import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function ViewSubCategory() {
    const [subCategories, setSubCategories] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState(1);
    

    useEffect(() => {
        axios.post('http://localhost:4000/api/admin/sub-categories',{
          page : currentPage,
        })
          .then((success) => {
            if(success.data.status == true){
                setImageUrl(success.data.base_url);
              setSubCategories(success.data.data)
            } else {
                setSubCategories([]);
            }
          }).catch((error) => {
              toast.error('Something went wrong !!');
          })
      },[currentPage,status]);

  return (
    <section className="w-full">
        <Breadcrumb path={"Sub Category"} path2={"View Sub Category"} slash={"/"} />
        <div className="w-full min-h-[610px]">
          <div className="max-w-[1220px] mx-auto py-5">
            <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
              View Sub Category
            </h3>
        <div className="border border-t-0 rounded-b-md border-slate-400">               
            <div className="relative overflow-x-auto">
                <table className="w-full  text-left rtl:text-right text-gray-500 ">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3" width="100px">
                                Select All
                            </th>
                            <th scope="col" className="px-6 py-3" width="100px">
                                S. No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Parent Category Name 
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name 
                            </th>
                            <th scope="col" className="px-6 py-3" width="100px">
                                Featured Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image 
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
                                (subCategories.length > 0)
                                ? 
                                subCategories.map((v,i) => {
                                    return(
                                        <tr className="bg-white border-b">
                                            <th scope="row" className="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap ">
                                            <input name='deleteCheck' id="purple-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 "/>
                                            </th>
                                            <td className="px-6 py-4">
                                                { i+1 }
                                            </td>
                                            <td className="px-6 py-4">
                                                { v.root_id.name }
                                            </td>
                                            <td className="px-6 py-4">
                                                { v.name }
                                            </td>
                                            <td className="px-6 py-4">
                                                { v.featured_categories }
                                            </td>
                                            <td className="px-6 py-4">
                                                <img className='w-16 h-16 rounded-md object-cover' src={imageUrl+v.image} alt="" />
                                            </td>
                                            <td className="px-6 py-4">
                                            { v.order }
                                            </td>
                                            <td className="px-6 py-4">
                                            { v.status ? 'Active' : 'Inactive' }
                                            </td>
                                            <td className="px-6 py-4 flex gap-3 mt-6">
                                                <Link to={ `/sub-category/update-sub-category/${v._id}` }>
                                                <svg fill='gold' className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                                                </Link>
                                            </td>
                                            
                                        </tr>
                                    )
                                })
                                
                                :
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 text-center" colSpan={9}>
                                        No Record Found !!
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
  </section>
  )
}