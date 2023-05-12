import { BrowserRouter as Router, Routes,Route}from "react-router-dom"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Registor from "./pages/Registor";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
   <>
   
    <Router>
      <div className="container w-11/12 mx-auto ">
        <Header />
        <Routes> 
          <Route path="/" element={<Dashboard />} />
          <Route path="/registor" element={<Registor />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
    
  
   </>
  );
}

export default App;
