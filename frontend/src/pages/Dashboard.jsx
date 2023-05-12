import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user){
       navigate('/login')
    }
  },[user,navigate])


  return (
    <div className="flex items-center justify-center">Dashboard</div>
  )
}

export default Dashboard