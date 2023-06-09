import { useEffect, useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import {toast}  from 'react-toastify'
import { FaUser} from "react-icons/fa"
import { registor ,reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"


function Registor() {
    const [formData,setFormData]= useState({
        name: "",
        email:"",
        password:"",
        confirmPass:"",
    })
    
    const {name ,email,password,confirmPass}=formData

    const navigate =useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth)
     
    useEffect(()=>{
      if(isError){
        toast.error(message)
      }

      if(isSuccess || user){
         navigate('/')
        
      }

      dispatch(reset())
    },[user, isError, isSuccess, navigate, dispatch, message])

    const handleOnChange =(e)=>{
       setFormData((prevFormData)=>({
          ...prevFormData,
          [e.target.name]:e.target.value,
       }))
    }

    function onSubmit(e){
      e.preventDefault()

      if(password !== confirmPass){
        toast.error('Passwords do not match!')
      }else{
        const userDate = {
          name,email,password,
        }

        dispatch(registor(userDate))
      }
    }
  if(isLoading){
    return <Spinner />
  }
  return (
    <div className="flex items-center justify-center ">
        <div className="form-container w-full sm:w-1/3 ">
         <section className="heading p-2 pb-0 text-xl flex flex-col items-center ">
           <h1 className="flex text-3xl font-bold ">
             <FaUser /> <span className="ml-4">Registor</span>
            </h1>
            <p >Please create an account</p>
         </section>
         <section className="form">
            <form className="p-4"  onSubmit={onSubmit}>
                <div className="input-group mb-4">
                    <label className="absolute opacity-0" htmlFor="name ">Name</label>
                    <input
                         autoFocus
                         type="text"
                         className="form-input w-full rounded-xl border-black "
                         id="name"
                         name="name"
                         placeholder="Enter name"
                         value={name}
                         onChange={handleOnChange}
                    />
                </div>
                <div className="input-group mb-4">
                    <label className="absolute opacity-0" htmlFor="email">email</label>
                    <input
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
                <div className="input-group mb-4">
                    <label className="absolute opacity-0" htmlFor="confirmPass">Confrim password</label>
                    <input
                         type="password"
                         className="form-input border-black rounded-xl w-full"
                         id="confirmPass"
                         name="confirmPass"
                         placeholder="Enter password again"
                         value={confirmPass}
                         onChange={handleOnChange}
                    />
                </div>
                <div className="input-group ">
                    <button 
                    type="submit" 
                    className="bg-black w-full p-1 rounded-xl text-white"                   
                     >submit</button>
                </div>
            </form>
         </section>
        </div>
    </div>
  )
}

export default Registor