import axios from "axios";

const API_URL ='http://localhost:5001/api/user';

// registor user 

const registor = async (userData)=>{

    const response = await axios.post(API_URL,userData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))

    }

    return response.data
}

// logout user 
const logout = async () => {
    localStorage.removeItem('user')
} 

// login user 

const login = async (userData)=>{

    const response = await axios.post(`${API_URL}/login`, userData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))

    }

    return response.data
}



const authService={
    registor,
    logout,
    login,
}


export default authService