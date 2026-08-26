
 import { useState } from "react";
 import { axiosInstance, getErrorMessage } from "../api/axios";
 import {ToastContainer, toast} from "react-toastify";
 import { useNavigate } from "react-router-dom"

export default function Signup() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
   const { name, value} = event.target;
   setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      const response = await axiosInstance.post("/login", formData)
      console.log(response.data)
      setUser(response.data.data)
      toast.success(response.data.message)
    }catch(err) {
      toast.error(getErrorMessage(err))
    }
  }

    return(
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <ToastContainer/>
  <form onSubmit={handleSubmit} action="" method="POST" className="w-full h-full flex flex-col items-center gap-6 p-4 border border-gray-300 rounded-md">
    <div className="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} autoComplete="email" 
            onChange={handleChange} className="w-full h-full border border-gray-300 rounded-md p-2" />
    </div>

    <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} autoComplete="current-password" 
          onChange={handleChange} className="w-full h-full border border-gray-300 rounded-md p-2" />
    </div>

    <button type="submit">
        Signup
    </button>
  </form>
</div>
    )
}