import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
// get user 
const user  =  JSON.parse(localStorage.getItem('user'))

const initialState = {
    user:user?user:null,
    isSuccess:false,
    isError:false,
    isLoading:false,
    message:'',    
}

// registor 
export const registor  =  createAsyncThunk('auth/registor', async (user, thunkAPI) =>{
    try {
        return await authService.registor(user)
    } catch (error) {
        const message  = (error.response && 
                        error.response.data &&
                         error.response.data.message) ||
                          error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// logout 

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

//login

// registor 
export const login  =  createAsyncThunk('auth/login', async (user, thunkAPI) =>{
    try {
        return await authService.login(user)
    } catch (error) {
        const message  = (error.response && 
                        error.response.data &&
                         error.response.data.message) ||
                          error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const authSlice  =  createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset:(state) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }

    },
    extraReducers:(builder) =>{
        builder 
            .addCase(registor.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(registor.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(registor.rejected, (state,action) =>{
                state.isLoading = false
                state.isError = true
                state.message  = action.payload
                state.user = null
            })
            .addCase(login.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state,action) =>{
                state.isLoading = false
                state.isError = true
                state.message  = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user=null
            })
    }
})

export const {reset}  = authSlice.actions
export default authSlice.reducer