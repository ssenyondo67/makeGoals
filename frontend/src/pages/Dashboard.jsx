/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import GoalForm from "./dashboard/GoalForm"
import { getGoals, reset } from "../features/goals/goalSlice"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import GoalItem from "./dashboard/GoalItem"
import {FaRegPlusSquare} from 'react-icons/fa'

function Dashboard() {
  
  const [isaddgoal,setIsaddgoal] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {goals,isLoading,isError,message} =  useSelector((state)=> state.goals)

  useEffect(() => {
    if(!user){
       navigate('/login')
    }
    if(isError){
      toast.error(message)
    }
     
    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  },[user, navigate, isError, message, dispatch,])
  
  if(isLoading){
    return <Spinner />
  }

  return (
    <div className="text-center ">
      <h1 className="my-2">Welcome {user && user.name}</h1>
      <section className="form">
        {
         isaddgoal && <GoalForm />
        }
       </section>
      <section className="content mt-2">
        {goals.length >0 ?(
             <>
             <h2 className="mx-2">Your goals</h2>
             <div className="conatiner flex flex-2 mt-2  gap-2 flex-wrap">
               {
                goals.map((goal)=>(
                  <GoalItem 
                         key={goal._id}
                         goal={goal}
                   />
                ))
               }
             </div>
             </>
        ):(
          <h3>You don't have any Goal set</h3>

        )}
        {
          !isaddgoal && ( 
          <button  className="flex items-center justify-between gap-2 cursor-pointer mt-8" onClick={()=>setIsaddgoal(!isaddgoal)}>
          <FaRegPlusSquare /> <span>Add Goall</span>
      </button>)
        }
       
      </section>
    </div>
  )
}

export default Dashboard