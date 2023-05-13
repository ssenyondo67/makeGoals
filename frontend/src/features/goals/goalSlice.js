import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
    goals: [],
    isSuccess:false,
    isError:false,
    isLoading:false,
    message:'',    
}

// create GOAL
export const createGoal = createAsyncThunk('goals/createGoal', async (data,thunkAPI) => {
     
     try {
        const token = thunkAPI.getState().auth.user.token        
        return await goalService.createGoal(data,token)
     } catch (error) {
        const message  = (error.response && 
            error.response.data &&
             error.response.data.message) ||
              error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
     }
})

// create GOAL
export const getGoals = createAsyncThunk('goals/getGoals', async (_,thunkAPI) => {
     
    try {
       const token = thunkAPI.getState().auth.user.token      
       return await goalService.getGoals(token)
    } catch (error) {
       const message  = (error.response && 
           error.response.data &&
            error.response.data.message) ||
             error.message ||error.toString()
       return thunkAPI.rejectWithValue(message)
    }
})


// delete GOAL
export const deleteGoal = createAsyncThunk('goals/deleteGoal', async (goalID,thunkAPI) => {
     
    try {
       const token = thunkAPI.getState().auth.user.token      
       return await goalService.deleteGoal(goalID,token)
    } catch (error) {
       const message  = (error.response && 
           error.response.data &&
            error.response.data.message) ||
             error.message ||error.toString()
       return thunkAPI.rejectWithValue(message)
    }
})

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder
            .addCase(createGoal.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(createGoal.rejected, (state,action) =>{
                state.isLoading = false
                state.isError = true
                state.message  = action.payload
                state.goals=[]
            })
            .addCase(getGoals.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(getGoals.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.goals=action.payload
            })
            .addCase(getGoals.rejected, (state,action) =>{
                state.isLoading = false
                state.isError = true
                state.message  = action.payload
                state.goals =[]
            })
            .addCase(deleteGoal.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(deleteGoal.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.goals = state.goals.filter((goal)=>goal._id !== action.payload._id)
            })
            .addCase(deleteGoal.rejected, (state,action) =>{
                state.isLoading = false
                state.isError = true
                state.message  = action.payload
                state.goals =[]
            })
    }
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer