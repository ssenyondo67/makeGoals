import {FaPen,FaTrashAlt} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../../features/goals/goalSlice'

export default function GoalItem({goal}) {

    const dispatch = useDispatch()

    const handleEdit = (goalID)=>{
        
    }
    const handleDelete = (goalID)=>{
        dispatch(deleteGoal(goalID))
    }
  return (
    <div className="goal p-4 flex-1  shadow-md shadow-black relative" >
        <div className="flex text-lg gap-4 font-bold absolute top-1 right-1">

            <button className='text-blue-500 cursor-pointer' onClick={()=>handleEdit(goal._id)}>
                 <FaPen />
            </button>
            <button className='text-red-500 cursor-pointer' onClick={()=>handleDelete(goal._id)}>
                <FaTrashAlt  />
            </button>
             </div>
        <div className="text-xl mt-2">
            {new Date(goal.createdAt).toLocaleDateString('en-US')}
            <hr />
            <h2 className="mt-2">{goal.text}</h2>
        </div>
    </div>
  )
}
