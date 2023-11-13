import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completed } from '../../Redux/AllSlice/User';
import './CompletedProject.css'


const CompletedProject = () => {
  const [state, setState] = useState([]);
  const reversed = [...state].reverse();
  const { isLoading, error } = useSelector(state => state.user);
  // console.log("UseSelector in details: ",isLoading,detail,error);
  const dispatch = useDispatch();
  // console.log("State: ",state);

  useEffect(() => {
    dispatch(completed())
      .then(res => {
        setState(res.payload)
        // console.log("Fetched projects: ",res.payload);
      })
      .catch(err => {
        console.log("Error: ", err);
      })
  }, [dispatch])
  return (
    <div className="compimg">
      {isLoading && <h3>...Loading</h3>}
      {error && <h3>{error}</h3>}
      {state && reversed.map(details => (
        <React.Fragment key={details.id}>
          <div className='divhead'>
            <h3> <i>Client name: {details.client_name}</i></h3>
            <h2>Our work</h2>
          </div>
          {details.bedroom && <img src={details.bedroom} alt="" />}
          {details.living && <img src={details.living} alt="" />}
          {details.kitchen && <img src={details.kitchen} alt="" />}
          {details.dining && <img src={details.dining} alt="" />}

          <br />
        </React.Fragment>
      ))}
    </div>
  )
}

export default CompletedProject