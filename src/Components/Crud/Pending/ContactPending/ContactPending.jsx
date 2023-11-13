import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { contactUpdate, contactView } from '../../../../Redux/AllSlice/User';
import './ContactPending.css'
import Swal from 'sweetalert2';

const ContactPending = () => {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const navigate = useNavigate();
  // console.log("Collected data from useParams :", cid);

  const [inputState, setInputState] = useState({
    full_name: "",
    subject: "",
    address: "",
    mobile_number: "",
    email: "",
    contact_status: "",
    id: ""
  });
  const contact_statusC = "Contacted"
  const btnstatus = inputState.contact_status === "pending";
  useEffect(() => {
    dispatch(contactView())
      .then(ress => {
        // console.log("then :",res);
        const sub = ress.payload.find((user) => user.id == cid)
        setInputState(sub)
        // console.log("data from sub", sub);
      })
      .catch(err => {
        // console.log("Error: ", err);
      })

  }, [cid, dispatch]);

  const changeHandeler = (event) => {
    event.preventDefault();
    const formData = {
      full_name: inputState.full_name,
      subject: inputState.subject,
      address: inputState.address,
      mobile_number: inputState.mobile_number,
      email: inputState.email,
      contact_status: contact_statusC,
      id: inputState.id
    };

    const data = {
      id: cid,
      formValue: formData
    };
    Swal.fire({
      title: 'Are you sure?',
      text: "You have contacted the client!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes! I'm sure"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(contactUpdate(data))
        navigate("/contact-view")
      }
    })
  }
  return (
    <div>
      <div className="containerr">
        <h3><b>Name : </b> {inputState.full_name}</h3>
        <h3><b>Mobile no.- </b> {inputState.mobile_number}</h3>
        <h3><b>Email : </b> {inputState.email}</h3>
        <h3><b>Subject : </b> {inputState.subject}</h3>
        <h3><b>Address : </b> {inputState.address}</h3>
        <h3><b>Status : </b> {inputState.contact_status}</h3>
        {btnstatus ? <button onClick={changeHandeler}>Contact done</button> : <h3 className="green">We have contacted</h3>}
      </div>

    </div>
  )
}

export default ContactPending