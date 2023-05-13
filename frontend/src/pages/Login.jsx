import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login,reset } from "../features/auth/authSlice"
import {toast} from 'react-toastify'
import {FaSignInAlt}  from 'react-icons/fa'

function Login() {
    const [formData,setFormData]= useState({
        email:"",
        password:"",       
    })
    
    const {email,password}=formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading,isSuccess,isError, message} = useSelector((state) => state.auth)
    
    useEffect(() => {
      if(isError){
        toast.error(message)
      }
      
      if(isSuccess || user){
        navigate('/')
       
      }

      dispatch(reset())

    },[isError,isLoading,isSuccess,dispatch,navigate,user,message])

    const handleOnChange =(e)=>{
       setFormData((prevFormData)=>({
          ...prevFormData,
          [e.target.name]:e.target.value,
       }))
    }

    function onSubmit(e){
      e.preventDefault()

      if(!email && !password){
        toast.error('All filed are required')
      }else{
        const userData = {
          email,
          password,
        }
        dispatch(login(userData))
      }

    }

  return (
    <div className="flex items-center justify-center ">
        <div className="form-container w-full sm:w-1/3 ">
         <section className="heading p-2 pb-0 text-xl flex flex-col items-center ">
           <h1 className="flex text-3xl font-bold ">
             <FaSignInAlt /> <span className="ml-4">Login</span>
            </h1>
            <p >Login and start setting goals</p>
         </section>
         <section className="form">
            <form className="p-4"  onSubmit={onSubmit}>
               
                <div className="input-group mb-4">
                    <label className="absolute opacity-0" htmlFor="email">email</label>
                    <input
                         autoFocus
                         type="text"
                         className="form-input border-black rounded-xl w-full"
                         id="email"
                         name="email"
                         placeholder="Enter email"
                         value={email}
                         onChange={handleOnChange}
                    />
                </div>
                <div className="input-group mb-4">
                    <label className="absolute opacity-0" htmlFor="password">Password</label>
                    <input
                      
                         type="password"
                         className="form-input border-black rounded-xl w-full"
                         id="password"
                         name="password"
                         placeholder="Enter password"
                         value={password}
                         onChange={handleOnChange}
                    />
                </div>
                
                <div className="input-group ">
                    <button 
                    type="submit" 
                    className="bg-black w-full p-1 rounded-xl text-white"                   
                     >Send</button>
                </div>
            </form>
         </section>
        </div>
    </div>
  )
}

export default Login