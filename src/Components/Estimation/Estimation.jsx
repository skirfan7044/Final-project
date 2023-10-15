import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { estimationPost } from '../../Redux/AllSlice/User';
import './Estimation.css'
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftSquare } from "react-icons/bs";

const Estimation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [inputState, setInput] = useState({
        full_name: "",
        address: "",
        mobile_number: "",
        email: "",
        square_feet: "",
        estimation_status: "pending",
    });
    const [image, setImage] = useState({});

    const imageHandeler = (e) => {
        console.log(e.target.files);
        const data = new FileReader();
        data.addEventListener('load', () => {
            setImage(data.result);
        })
        data.readAsDataURL(e.target.files[0])
    }


    let changehandeler = (event) => {
        event.persist();
        let { name, value } = event.target
        setInput({ ...inputState, [name]: value });
    }

    let submitHandeler = (event) => {
        event.preventDefault();
        console.log("submitted value :", inputState);

        let detail = {
            full_name: inputState.full_name,
            mobile_number: inputState.mobile_number,
            email: inputState.email,
            square_feet: inputState.square_feet,
            plan_layout: image,
            estimation_status: inputState.estimation_status
        }

        dispatch(estimationPost(detail))
        navigate("/")
    }

    return (
        <>
            <div className="contact-form">
                <form onSubmit={submitHandeler}>
                    <Link to="/services">
                        <BsArrowLeftSquare size={"68px"} color={"green"} id='r-icon' />
                    </Link>
                    <h1 className="e-h">Estimation Form</h1>
                    <input type="text" name='full_name' id='full_name' placeholder='Enter your name' onChange={changehandeler} />

                    <input type="text" name='mobile_number' id='mobile_number' placeholder='Enter your mobile number' onChange={changehandeler} />

                    <input type="email" name='email' id='email' placeholder='Enter your email address' onChange={changehandeler} />

                    <input type="number" name='square_feet' id='square_feet' placeholder='Enter area in square feet' onChange={changehandeler} />

                    <label htmlFor="image">Plan layout if you have</label>
                    <input type="file" name='image' id='image' onChange={imageHandeler} />

                    <input type="submit" id='submit' value="Submit" />

                </form>
            </div>
        </>
    )
}

export default Estimation