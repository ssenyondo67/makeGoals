import {FaSignInAlt, FaSignOutAlt,FaUser } from "react-icons/fa"
import { Link} from "react-router-dom"

function Header() {
  return (
    <header className="py-4 flex item-center justify-between border-b-2" >
        <div className="logo font-extrabold text-2xl">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul className="nav flex items-center justify-between">
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
        </ul>
      
    </header>
  )
}

export default Header