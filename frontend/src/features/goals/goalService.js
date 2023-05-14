import axios from "axios";

const API_URL = 'http://localhost:5001/api/goals/';

//create goal
const createGoal = async (data,token) => {
   
    const config = {
        headers:{
            "authorization":`Bearer ${token}`, 
        }
    }
    const response = await axios.post(API_URL,data,config)

    return response.data
}

//get all goal
const getGoals = async (token) => {
    const config = {
        headers:{
            authorization:`Bearer ${token}`, 
        }
    }
    const response = await axios.get(API_URL,config)

    return response.data
}

//update goal
const updateGoal = async (goalID, data, token) => {
    const config = {
        headers:{
            authorization: `Bearer ${token}`, 
        }
    }
    const response = await axios.put(API_URL+goalID,data,config)

    return response.data
}


//delete goal
const deleteGoal = async (goalID, token) => {
    const config = {
        headers:{
            authorization: `Bearer ${token}`, 
        }
    }
    const response = await axios.delete(API_URL+goalID, config)

    return response.data
}


const goalService = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
}

export default goalService