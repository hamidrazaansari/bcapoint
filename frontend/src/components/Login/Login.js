import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [passward, setPassword] = useState('')

  const login = () => {
    axios.post("http://109.106.255.239:8000/api/auth/login", {
      "username": user,
      "password": passward,
    })
      .then(res => {
        sessionStorage.setItem('Token', user);
        alert(res.statusText)
        navigate('/admin');
      }).catch(err => console.log("err:", err.message));
  }

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    if (token) {
      navigate('/admin');
    }

  }, [navigate]);


  return (
    <div className="login">
      <div className='loginContainer'>
        <form className="loginForm">
          <h4>
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </h4>
          <div>
          <input type={'text'} placeholder={'enter username'} onChange={(e) => setUser(e.target.value)} />
          <input type={'password'} placeholder={'enter passward'} onChange={(e) => setPassword(e.target.value)} />
          <input className='sbm' type={'submit'} value='Login' onClick={login} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login