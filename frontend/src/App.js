import { BrowserRouter as Router, Routes,Route}from "react-router-dom"
import Login from "./features/Login";
import Dashboard from "./features/Dashboard";
import Registor from "./features/Registor";
import Header from "./components/Header";


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
      </div>
    </Router>
  
   </>
  );
}

export default App;
