import {FaTrashAlt,FaEdit,FaSave} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteGoal,updateGoal } from '../../features/goals/goalSlice'
import {  useState } from 'react'



export default function GoalItem({goal}) {

    const [isEditing,setIsEditing] = useState(false)

    
    const dispatch = useDispatch()
  
    
    
    const handleUpadte = (goalID)=>{
         const text = document.getElementById(goalID).innerText
         const goalData = {
            text,
            goalID
         }
        dispatch(updateGoal(goalData))
     
    }
    const handleDelete = (goalID)=>{
        dispatch(deleteGoal(goalID))
       
    }
  return (
    <div className="goal p-4 flex-1  shadow-md shadow-black relative" >
        <div className="flex text-lg gap-4 font-bold absolute top-1 right-1">

            <button className='text-blue-500 cursor-pointer'>
                { isEditing ? <FaSave  onClick={()=>handleUpadte(goal._id)}/> : <FaEdit  onClick={()=>setIsEditing(!isEditing)} />}
            </button>
            <button className='text-red-500 cursor-pointer' onClick={()=>handleDelete(goal._id)}>
                <FaTrashAlt  />
            </button>
             </div>
        <div className="text-xl mt-2">
            {new Date(goal.createdAt).toLocaleDateString('en-US')}
            <hr />
            <h2 className="mt-2"
               id={goal._id}
              contentEditable={isEditing}
               suppressContentEditableWarning={true}
               >
                {goal.text}             
            </h2>
        </div>
    </div>
  )
}
