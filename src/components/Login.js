import React, {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import themeContext from '../context/themes/themeContext'

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: ""});

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
    const url = 'http://localhost:80/auth/login';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        },
        body : JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    // console.log(json);
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
      <h2 className='mb-4 text-center'>Login To Access All Features</h2>
      <form onSubmit={submitdata} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div className="mb-3 col-md-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' onChange={savechange} id="exampleInputEmail1" aria-describedby="emailHelp" style={cardStyle} />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3 col-md-4">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' onChange={savechange} id="exampleInputPassword1" style={cardStyle} />
        </div>
        <button type="submit" className="btn btn-primary" style={{marginRight:'28%'}}>Submit</button>
      </form>
    </div>
  )
}

export default Login