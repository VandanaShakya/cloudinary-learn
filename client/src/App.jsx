 
import axios from "axios";
import Login from './Login';
import Signup from './Signup';
import { Routes, Route } from 'react-router-dom'
import ForgotPasswod from "./pages/ForgotPasswod";
import ResetPassword from "./pages/ResetPassword";
import FileUpload from "./pages/FileUpload";
function App() {
 

   const api = axios.create({
    baseURL: "http://localhost:5001/api/auth",
    withCredentials: true // to allow cookies
  });
  return (
    <>
   <Routes>
   <Route path='/' element={<Signup/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path="/forgot-password" element={<ForgotPasswod />} />
   <Route path="/reset-password/:token" element={<ResetPassword />} />
   <Route path="/upload" element={<FileUpload />} />
   </Routes>

    </>
  )
}

export default App
