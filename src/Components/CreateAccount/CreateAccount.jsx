import React, { useState } from 'react'
import { sign_up } from '../../Redux/AllSlice/View';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css'

const CreateAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [inputState, setInput] = useState({
        first_name: "",
        last_name: "",
        password: "",
        email: "",
        isError: {
            first_name: "",
            last_name: "",
            password: "",
            email: ""
        }
    });

    let valid_email = RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$');
    let valid_password = RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$');

    let changehandeler = (event) => {
        event.persist();
        let { name, value } = event.target
        let err = { ...inputState.isError }
        switch (name) {
            case 'first_name': err.first_name = value.length < 1 ? "Required feild" : ""
                break;

            case 'last_name': err.last_name = value.length < 1 ? "Required feild" : ""
                break;

            case 'email': err.email = value.length < 1 ? "Required feild" : (valid_email.test(value) ? "" : "Email should be in this format ( name@example.com )")
                break;

            case 'password': err.password = value.length < 1 ? "Required feild" : (valid_password.test(value) ? "" : "Choose a strong password")
                break;

            default: console.log("no error");
                break;

        }
        setInput({ ...inputState, [name]: value, isError: err });
        // console.log(err);
    }

    let submitHandeler = (event) => {
        event.preventDefault();
        // console.log("submitted value :", event);

        let formData = new FormData();
        formData.append("first_name", inputState.first_name)
        formData.append("last_name", inputState.last_name)
        formData.append("email", inputState.email)
        formData.append("password", inputState.password)
        dispatch(sign_up(formData));
        
        setTimeout(() => {
            navigate("/login")
        }, 1500);
    }

    return (
        <div className="contact-form">
            <form onSubmit={submitHandeler}>
                <h1>Registration</h1>
                <input type="text" name='first_name' id='first_name' placeholder='Enter your first name' onChange={changehandeler} />
                {inputState.isError.first_name.length > 0 ? <p className="error">{inputState.isError.first_name}</p> : ""}

                <input type="text" name='last_name' id='last_name' placeholder='Enter your last name' onChange={changehandeler} />
                {inputState.isError.last_name.length > 0 ? <p className="error">{inputState.isError.last_name}</p> : ""}

                <input type="email" name='email' id='email' placeholder='Enter your email address' onChange={changehandeler} />
                {inputState.isError.email.length > 0 ? <p className="error">{inputState.isError.email}</p> : ""}

                <input type="password" name='password' id='password' placeholder='Enter a password' onChange={changehandeler} />
                {inputState.isError.password.length > 0 ? <p className="error">{inputState.isError.password}</p> : ""}

                <input type="submit" id='submit' value="Submit" />

            </form>
        </div>
    )
}

export default CreateAccount