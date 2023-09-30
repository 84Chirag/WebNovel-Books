import React, {useState} from 'react'

const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: ""})

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
    console.log(json);

  }
  const savechange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div className='container row my-4'>
      <form onClick={submitdata}>
        <div className="mb-3 col-md-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={savechange} id="exampleInputEmail1" aria-describedby="emailHelp" style={{ background: 'transparent', borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderRadius: '0' }} />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3 col-md-4">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={savechange} id="exampleInputPassword1" style={{ background: 'transparent', borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderRadius: '0' }} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login