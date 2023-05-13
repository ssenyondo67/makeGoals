
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createGoal} from '../../features/goals/goalSlice'

function GoalForm() {
  const [goal, setGoal] = useState('')

  const dispatch = useDispatch()
  
  

  const onsubmit = (e) => {   
    e.preventDefault()   
    if(!goal){
        toast.error('Please provide a goal')
    }else{
        const data = {
            text :goal,
        }
        
        dispatch(createGoal(data))
    
    }


  }
    
  return (
    <>
    <div className=''>
        <h2 className=''>Create a Goal</h2>
        <form className=''onSubmit={onsubmit}>
            <div className='input-group text-left'>
                <label htmlFor='goal' >Goal</label>
                <input
                    type="text"
                    className="form-input border-black rounded-xl w-full"
                    id="goal"
                    name="goal"
                    placeholder="Enter your goal"
                    value={ goal }
                    onChange={(e) => setGoal(e.target.value)}
                    />
            </div>
            <button 
                type="submit" 
                className="bg-black w-full p-1 rounded-xl text-white mt-1"                   
                    >  submit</button>
        </form>
    </div>
    </>
  )
}

export default GoalForm