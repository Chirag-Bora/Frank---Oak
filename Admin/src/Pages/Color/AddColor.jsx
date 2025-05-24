import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function AddColor() {

    const params = useParams();
    const [colorDetails, setColorDetails] = useState('');
   
  const colorHandler = (v) => {
    v.preventDefault();
    if(v.target._id.value == ''){
      axios.post('http://localhost:4000/api/admin/color/add', v.target)
      .then((success) => {
          if(success.data.status == true){
              v.target.reset();
              toast.success(success.data.message);
          }else{
              toast.success(success.data.message);
          }
      }).catch((error) => {
          toast.error('Somthing Went wrong!!');
      })

    } else {
      axios.post(`http://localhost:4000/api/admin/color/update/${v.target._id.value}`, v.target)
      .then((success) => {
          if(success.data.status == true){
              v.target.reset();
              toast.success(success.data.message);
          }else{
              toast.success(success.data.message);
          }
      }).catch((error) => {
          toast.error('Somthing Went wrong!!');
      })
    }
    
  }

    useEffect(() => {
      if(params.id != null){
        axios.post(`http://localhost:4000/api/admin/color/details/${params.id}`)
        .then((result) => {
          setColorDetails(result.data.data);
        }).catch((error) => {
           toast.error('Somthing went wrong !!');
        })
      }
     
    },[])
  return (
    <>
    <Breadcrumb path={"Colors"}
             path2={(params.id != null) ? 'update color' : 'Add color'} 
             slash={"/"} />
          <div className="w-full curser">
            <div className="max-w-[1220px] mx-auto py-5">
              <h3 className="text-[20px] font-semibold bg-slate-100 py-2 px-3 rounded-t-md border border-slate-400">
              {(params.id != null) ? 'update color' : 'Add color'} 
              </h3>
              <form  onSubmit={colorHandler}  className="p-3 border border-t-0 rounded-b-md border-slate-400"  autoComplete="off">
              <input type="hidden" name="_id" value={setColorDetails._id}/>
                <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Color Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={colorDetails.name}
                    id="base-input"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Color Name"
                  />
                </div>
                <div className="mb-5">
                  <input
                   type="color" 
                  name='code'
                  defaultValue={colorDetails.code}
                  />
                  <label
                    for="base-input"
                    className="block mb-8 text-md font-medium text-gray-900"
                  >
                    Color Picker
                  </label>
                  <br />
                </div>
                <div class="mb-5">
                      <label for="base-input" class="block mb-5 text-md font-medium text-gray-900"> order</label>
                          <input
                          type="text"
                          name="order"
                          defaultValue={colorDetails.order}
                          id="base-input"
                          class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                          placeholder=""
                          />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Select Color
                </button>
              </form>
            </div>
          </div>
          </>
  );
}
