import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'


const Admin = () => {
  
  return (
    <div className="admin">
      <Link to="/contact-view">
        <div className="adminbox">
          <button>Contact submissions</button>
        </div>
      </Link>

      <Link to="/estimation-view">
        <div className="adminbox">
          <button>Estimation submissions</button>
        </div>
      </Link>

      <Link to="/add-completed-project">
        <div className="adminbox">
          <button>Add project</button>
        </div>
      </Link>

      <Link to="/remove-completed-project">
        <div className="adminbox">
          <button>Remove project</button>
        </div>
      </Link>

    </div>
  )
}

export default Admin