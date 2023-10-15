import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowLeftSquare } from "react-icons/bs";
import { sign_In } from '../../Redux/AllSlice/View';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [inputState, setInput] = useState({
    email: "",
    password: ""
  });


  let changehandeler = (event) => {
    event.persist();
    let { name, value } = event.target
    setInput({ ...inputState, [name]: value });
  }

  let submitHandeler = (event) => {
    event.preventDefault();
    // console.log("submitted value :", inputState);

    let formData = new FormData();
    formData.append("email", inputState.email)
    formData.append("password", inputState.password)

    dispatch(sign_In(formData));
    setTimeout(() => {
      navigate("/services")
      window.location.reload();
    }, 1500);
  }
  return (
    <div className="login-form">
      <form onSubmit={submitHandeler}>
        <Link to="/services">
          <BsArrowLeftSquare size={"68px"} color={"green"} className='l-icon' />
        </Link>
        <h1 className="e-h">Login</h1>

        <label htmlFor="email">User Id</label>
        <input type="email" name='email' id='email' placeholder='Enter user Id' onChange={changehandeler} />

        <label htmlFor="password">Password </label>
        <input type="password" name='password' id='password' placeholder='Enter password' onChange={changehandeler} />
        <p>Forgot password ?</p>
        <p><span className="spcolor">Don't have an account?</span> <Link to="/create-account"> Create an account</Link></p>

        <input type="submit" id='submitt' value="Login" />

      </form>
    </div>
  )
}

export default Login