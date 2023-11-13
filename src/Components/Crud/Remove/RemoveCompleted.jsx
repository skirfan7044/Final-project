import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { completed, deleteCompleted } from '../../../Redux/AllSlice/User';
import './RemoveCompleted.css'

const RemoveCompleted = () => {
  const [stateDelete, setStateDelete] = useState([]);
  const reversed = [...stateDelete].reverse();
  const { isLoading, error } = useSelector(state => state.user);
  // console.log("UseSelector in details: ",isLoading,detail,error);
  const dispatch = useDispatch();
  // console.log("State: ",state);

  useEffect(() => {
    dispatch(completed())
      .then(ress => {
        setStateDelete(ress.payload)
        // console.log("Fetched projects: ", ress.payload);
      })
      .catch(err => {
        console.log("Error: ", err);
      })
  }, [dispatch])

  const deleteIt = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCompleted(id));
      }
    })
  }
  return (
    <div className="compimg">
      {isLoading && <h3>...Loading</h3>}
      {error && <h3>{error}</h3>}
      {stateDelete && reversed.map(details => (
        <React.Fragment key={details.id}>
          <div className='divhead'>
            <h3> <i><b>Client name: </b> {details.client_name}</i></h3>
            <h3> <i><b>Client address: </b> {details.client_address}</i></h3>
            <button onClick={() => deleteIt(details.id)}>Remove</button>
          </div>
          {details.bedroom && <img src={details.bedroom} alt="bedroom" />}
          {details.living && <img src={details.living} alt="living" />}
          {details.kitchen && <img src={details.kitchen} alt="kitchen" />}
          {details.dining && <img src={details.dining} alt="dining" />}
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}

export default RemoveCompleted