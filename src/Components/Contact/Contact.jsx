import React, { useState } from 'react'
import './Contact.css'
import { useDispatch } from 'react-redux';
import { contact } from '../../Redux/AllSlice/User';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const [inputState, setInput] = useState({
    full_name: "",
    subject: "",
    address: "",
    mobile_number: "",
     email: "",
     contact_status:"pending",
      isError: {
      full_name: "",
      subject: "",
      address: "",
      mobile_number: "", email: ""
    }
  });

  const valid_email = RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$');

  const changehandeler = (event) => {
    event.persist();
    const { name, value } = event.target
    const err = { ...inputState.isError }
    switch (name) {
      case 'full_name': err.full_name = value.length < 1 ? "Required feild" :""
        break;

      case 'mobile_number': err.mobile_number = value.length < 1 ? "Required feild" :""
        break;

      case 'email': if (value.length < 1)
        err.email = "Required feild"
      else if (!valid_email.test(value))
        err.email = "Email should be in this format ( name@example.com )"
      else err.email = ""
        break;

      case 'subject': err.subject = value.length < 1 ? "Required feild" : (value.length < 8 ? "Atleast 8 characters are required" : "")
        break;

      case 'address': err.address = value.length < 1 ? "Required feild" : (value.length < 20 ? "Enter address in detail" : "")
        break;

      default: console.log("no error");
        break;

    }
    setInput({ ...inputState, [name]: value, isError: err });
    // console.log(err);
  }

  const submitHandeler = (event) => {
    event.preventDefault();
    // console.log("submitted value :", inputState);

    const detail = {
      full_name: inputState.full_name,
      mobile_number: inputState.mobile_number,
      email: inputState.email,
      subject: inputState.subject,
      address: inputState.address,
      contact_status: inputState.contact_status
    }

    dispatch(contact(detail))
    navigate("/")
  }

  return (
    <>
      <div className="contact-form">
        <form onSubmit={submitHandeler}>
          <h1>Please fill the form</h1>
          <input type="text" name='full_name' id='full_name' placeholder='Enter your name' onChange={changehandeler} />
          {inputState.isError.full_name.length > 0 ? <p className="error">{inputState.isError.full_name}</p> : ""}

          <input type="text" name='mobile_number' id='mobile_number' placeholder='Enter your mobile number' onChange={changehandeler} />
          {inputState.isError.mobile_number.length > 0 ? <p className="error">{inputState.isError.mobile_number}</p> : ""}

          <input type="email" name='email' id='email' placeholder='Enter your email address' onChange={changehandeler} />
          {inputState.isError.email.length > 0 ? <p className="error">{inputState.isError.email}</p> : ""}

          <input type="text" name='subject' id='subject' placeholder='Subject' onChange={changehandeler} />
          {inputState.isError.subject.length > 0 ? <p className="error">{inputState.isError.subject}</p> : ""}

          <input type="text" name='address' id='address' placeholder='Enter your address' onChange={changehandeler} />
          {inputState.isError.address.length > 0 ? <p className="error">{inputState.isError.address}</p> : ""}

          <input type="submit" id='submit' value="Submit" />

        </form>
      </div>
    </>
  )
}

export default Contact