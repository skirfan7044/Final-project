import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EstimationUpdate, estimationView } from '../../../../Redux/AllSlice/User';
import Swal from 'sweetalert2';
import "./EstimationPending.css";

const EstimationPending = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { eid } = useParams();
  // console.log("Collected data from useParams :", eid);

  const [state, setState] = useState({
    full_name: "",
    square_feet: "",
    mobile_number: "",
    email: "",
    plan_layout: "",
    estimation_status: "",
    id: ""
  });
  const estimation_statusS= "Sent";
  const btnstatus=state.estimation_status==="pending";

  useEffect(() => {
    dispatch(estimationView())
      .then(ress => {
        // console.log("then :",res);
        const est = ress.payload.find((user) => user.id == eid);
        setState(est)
        // console.log("data from sub", est);
      })
      .catch(err => {
        console.log("Error: ", err);
      })

  }, [dispatch]);

  const submitHandeler = (event) => {
    event.preventDefault();
    const formData = {
      full_name: state.full_name,
      square_feet: state.square_feet,
      mobile_number: state.mobile_number,
      email: state.email,
      estimation_status: estimation_statusS,
      plan_layout: state.plan_layout,
      id: state.id
    };

    const data = {
      id: eid,
      formValue: formData
    };

    Swal.fire({
      title: 'Are you sure?',
      text: "You have sent the estimation!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes! I'm sure"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(EstimationUpdate(data));
        navigate("/estimation-view")
      }
    })
  }
  return (
    <div className="main">
      <div className="containerrr">
        <h3><b>Name : </b> {state.full_name}</h3>
        <h3><b>Mobile no.- </b> {state.mobile_number}</h3>
        <h3><b>Email : </b> {state.email}</h3>
        <h3><b>Area : </b> {state.square_feet} Squarefeet</h3>
        <h3><b>Status : </b> {state.estimation_status}</h3>
     {btnstatus? <button onClick={submitHandeler}>Estimate sent</button> : <h3 className="green">Estimation has been given</h3>}
      </div>
      <div className="imgboxx">
        {
          state.plan_layout.length > 10 ? <img src={state.plan_layout} alt="" /> : <h1>Image not uploaded</h1>
        }
      </div>
    </div>
  )
}

export default EstimationPending