import {FaSignInAlt, FaSignOutAlt,FaUser } from "react-icons/fa"
import { Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())

        dispatch(reset())

        navigate('/')
    }
  return (
    <header className="py-4 flex item-center justify-between border-b-2" >
        <div className="logo font-extrabold text-2xl">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul className="nav flex items-center justify-between">
            {user ? (
               <li  className="ml-4">
               <button  className="flex items-center justify-between gap-2" onClick={onLogout}>
                   <FaSignOutAlt /> <span>Logout</span>
               </button> 
               </li>
            ):(
                <>
                <li  className="ml-4">
                <Link to='/login' className="flex items-center justify-between gap-2" >
                    <FaSignInAlt /> <span>Login</span>
                </Link> 
                </li>
                <li className="ml-4">
                <Link className="flex items-center justify-between gap-2" to='/registor'>
                    <FaUser /> <span>Registor</span>
                </Link> 
                </li>
                </>
            )}
            
        </ul>
      
    </header>
  )
}

export default Header