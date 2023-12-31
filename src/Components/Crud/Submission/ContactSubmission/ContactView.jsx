import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ContactView.css'
import { contactDelete, contactView } from '../../../../Redux/AllSlice/User';
import { Link } from 'react-router-dom';
import { BsArrowLeftSquare } from "react-icons/bs";
import Swal from 'sweetalert2';

const ContactView = () => {
  const [state, setState] = useState([]);
  const reversed =[...state].reverse();
  const { isLoading, error } = useSelector(state => state.user);
  // console.log("UseSelector in details: ",isLoading,detail,error);
  const dispatch = useDispatch();
  // console.log("State: ",state);

  useEffect(() => {
    dispatch(contactView())
      .then(res => {
        setState(res.payload)
        // console.log("Fetched projects: ",res.payload);
      })
      .catch(err => {
        console.log("Error: ", err);
      })
  }, [dispatch]);

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
        dispatch(contactDelete(id));
      }
    })
  }
  return (
    <div className="table-box">
      {isLoading && <h3>...Loading</h3>}
      {error && <h3>{error}</h3>}
      <div className="sub-child">
      <Link to="/admin">
          <BsArrowLeftSquare size={"34px"} color={"white"} className='s-icon' />
        </Link>
        <h2>Contact Submissions</h2>
        </div>
      <table>
        <thead className="tablehead">
          <tr>
            <th className="color1">ID</th>
            <th className="color1">User's name:</th>
            <th className="color1">Contact status</th>
            <th className="color1">Details</th>
            <th className="color1">Remove</th>
          </tr>
        </thead>
        {state &&  reversed.map(view => (
          <React.Fragment key={view.id}>
            <tbody className="tablebody">
              <tr>
                <td>{view.id}</td>
                <td>{view.full_name}</td>
                <td>{view.contact_status}</td>
                <td className="wid"><Link to={`/contact-confirm/${view.id}`}><button>View</button></Link></td>
                <td className="wid btnred" onClick={() => deleteIt(view.id)}><button>Remove</button></td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  )
}

export default ContactView