import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import axios, { toFormData } from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function AddCategory() {

    const params = useParams();
    var [categoryDetails, setCategoryDetails] = useState('');

    console.log(params);

    const formHandler = (event) => {
        event.preventDefault();

        if(event.target._id.value == ''){
            axios.post('http://localhost:4000/api/admin/categories/add',event.target)
            .then((success) => {
                if(success.data.status == true){
                    event.target.reset();
                    toast.success(success.data.message);
                } else {
                    toast.error(success.data.message);
                }
            }).catch((error) => {
                toast.error('Something went wrong !!');
            })
        } else {
            axios.put(`http://localhost:4000/api/admin/categories/update/${event.target._id.value}`,event.target)
            .then((success) => {
                if(success.data.status == true){
                    event.target.reset();
                    toast.success(success.data.message);
                    console.log(success.data.message)
                    // setCategoryDetails('');
                } else {
                    toast.error(success.data.message);
                }
            }).catch((error) => {
                toast.error('Something went wrong !!');
            })
        }

        
    }

    useEffect(() => {

        if(params.id != null){
            axios.post(`http://localhost:4000/api/admin/categories/details/${params.id}`)
            .then((result) => {
                if(result.data.status == true){
                    setCategoryDetails(result.data.data)
                }
            })
            .catch((error) => {
                toast.error('Something went wrong !!');
            })
        }
        
    },[]);

    return (
        <section className="w-full">
            <Breadcrumb
                path={"Parent Category"}
                path2={ (params.id != null) ? 'Update Category' : "Add Category"}
                slash={"/"}
            />
            <div className="w-full min-h-[610px]">
                <div className="max-w-[1220px] mx-auto py-5">
                    <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                    { (params.id != null) ? 'Update Category' : "Add Category"}
                    </h3>
                    <form onSubmit={ formHandler } className="border border-t-0 p-3 rounded-b-md border-slate-400" autoComplete="off">
                        <input type="hidden" name="_id" value={categoryDetails._id}/>
                        <div className="mb-5">
                            <label
                                htmlFor="base-input"
                                className="block mb-5 text-md font-medium text-gray-900"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={ categoryDetails.name }
                                id="base-input"
                                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="base-input"
                                className="block mb-5 text-md font-medium text-gray-900"
                            >
                                Order
                            </label>
                            <input
                                type="number"
                                min={1}
                                name="order"
                                defaultValue={categoryDetails.order}
                                id="base-input"
                                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                                placeholder="Order"
                            />
                        </div>
                        <button
                            type="submit"
                            className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}