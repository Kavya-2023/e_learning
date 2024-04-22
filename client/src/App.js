import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './components/Home1';

import Contactus from './components/Contactus';
import Login from './components/Login' 
import SignUp from './components/Register'
import Pages from './components/Pages' 
import Footer from './components/Footer'; 
import Courses from './components/Courses' 



import Payment from './components/Payment';
import Cart from './components/Cart';
import Resetpassword from './components/ResetPassword';
import Enroll from './components/Enroll';
import Blog from './components/Blog';
import Blog1 from './components/Blog/Blog1.js';
import Blog2 from './components/Blog/Blog2.js';
import Blog3 from './components/Blog/Blog3.js';
import Aboutus from './components/Aboutus';
import Profile from './components/Profile';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsandConditions';
import ReturnsAndRefunds from './components/ReturnsAndRefunds';
import Teams from './components/Teams';
import Careers from './components/Careers'
import NotFound from './components/NotFound'
const App = () => {
   const [cartCourses, setCartCourses] = useState([]);

    const addToCart = (course) => {
        setCartCourses([...cartCourses, course]);
    };
  return (
    <BrowserRouter className="App">
    <Routes>
    <Route exact path="/" element={<Home1 />} />  
    <Route exact path="/login" element={<Login/>}/> 
    <Route exact path="/Signup" element={<SignUp/>}/> 
    <Route exact path="/page" element={<Pages/>}/>  
    <Route exact path="/foot" element={<Footer/>}/>  
    <Route exact path="/courses" element={<Courses/>}/> 
    
    <Route exact path='/payment' element={<Payment/>}/>
    <Route exact path='/cart' element={<Cart courses={cartCourses}/>}/>
    <Route exact path='/resetpassword' element={<Resetpassword/>}/>
    
    <Route exact path='/enroll' element={<Enroll/>}/>
    <Route exact path='/blog' element={<Blog/>}/>
    <Route exact path='/contactus' element={<Contactus/>}/>
    <Route exact path='/aboutus' element={<Aboutus/>}/>
    <Route exact path='/profile' element={<Profile/>}/>
    <Route exact path='/privacypolicy' element={<PrivacyPolicy/>}/>
    <Route exact path='/termsandconditions' element={<TermsAndConditions/>}/>
    <Route exact path='/refundandcancellation' element={<ReturnsAndRefunds/>}/>
    <Route exact path='/blog1' element={<Blog1/>}/>
    <Route exact path='/blog2' element={<Blog2/>}/>
    <Route exact path='/blog3' element={<Blog3/>}/>
    <Route exact path='/teams' element={<Teams/>}/>
    <Route exact path='/careers' element={<Careers/>}/>
    <Route path="*" render={(props) => <NotFound {...props} status={404} />} />
    </Routes>
  </BrowserRouter>
  )
};

export default App
