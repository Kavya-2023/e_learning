import React, {useState } from "react";
import { Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./index.css";

function Resetpassword() {
  const [email, setEmail] = useState("");
  const navigate=useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!email){
        alert("Enter The Email");
        return;
    }
    try{
      alert("Instruction has been sent to your mail");
      const res=await axios.post("http://localhost:5000/user/forgotpassword",{email})
      if(res.data.success === true){
        navigate('/login');
      }
      else{
        //console.log(res.data.message)
        alert(res.data.message);
      }
    }
    catch(err){
        console.log(err)
      }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="login__container"> 
      <h1 className="login-heading" style={{fontSize:"25px"}}>Reset Password</h1>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="login__btn"
        >
          Reset
        </button>
        <Link to='/signup' style={{color:"blue",textDecoration:"underline"}}>
            Signup
        </Link>
        <div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Resetpassword;