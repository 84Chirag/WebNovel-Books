import React, {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import themeContext from '../context/themes/themeContext'

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpasword:""});

  // Access the togglemode and modestate values from the themeContext.
  const { modestate } = useContext(themeContext);
  // console.log(modestate)

  const cardStyle = {
    background: modestate === 'light' ? 'transparent' : 'transparent',
    color: modestate === 'light' ? 'black' : 'white',
    borderLeft: 'none',
    borderRight: 'none', 
    borderTop: 'none', 
    borderRadius: '0'
  }

  const submitdata = async (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    const url = 'http://localhost:80/auth/signup';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        },
        body : JSON.stringify({name, email, password})
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      localStorage.setItem('token', json.authenticationtoken);
      navigate('/');
      // alert('sucessfull!')
    } else {
      alert("wrong!")
    }

  }

  const savechange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div className='my-5'>
      <h2 className='mb-4 text-center'>Create Your Account</h2>
    <form onSubmit={submitdata} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <div className="mb-3 col-md-4 col-lg-4 col-sm-4">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" onChange={savechange} name='name' style={cardStyle} />
      </div>
      <div className="mb-3 col-md-4 col-lg-4 col-sm-4">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={savechange} name='email' style={cardStyle} />
      </div>
      <div className="mb-3 col-md-4 col-lg-4 col-sm-4">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" onChange={savechange} name='password' minLength={5} required style={cardStyle} />
      </div>
      <div className="mb-3 col-md-4 col-lg-4 col-sm-4">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="cpassword" onChange={savechange} name='cpassword' minLength={5} required style={cardStyle} />
      </div>
      <button type="submit" className="btn btn-primary" style={{marginRight:'28%'}}>Submit</button>
    </form>
    </div>
  )
}

export default Signup