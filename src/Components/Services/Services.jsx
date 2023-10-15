import React, { useEffect } from 'react'
import './Services.css'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="ser" data-aos="fade-right">
      <h1>Our Services</h1>
      {/* <div className="imgser">
        <img src="../../../../assets/secondcopy.jpg" alt="" />
      </div> */}
      <div className="serdes">
        <h4>For over 2 years, RM Interior has worked to ensure the best quality service and most innovative design executions in India. Based out of 4 locations that include Kolkata, Delhi, Mumbai and Bengalore , the company has focused on a customer first policy since its inception.</h4>

        <h4> We have always taken pride in our work and clients have always spoken highly of our very young a vibrant team of designers and architects. Have a place you want some innovation for in terms of designs? Prices of standard design firms burning a hole in your pocket? Give RM Interior ring. After all, the world does know us as “The Design People”.</h4>
        <ul>
          <li>Planning and Designing</li>
          <li>Modular Kitchen</li>
          <li>Wallpaper & wall taxering</li>
          <li>Plumbing</li>
          <li>Carpentry & furniture</li>
          <li>Flooring</li>
          <li>False Ceiling</li>
          <li>Bathroom & Toilet Décor</li>
          <li>Soft Furnishing</li>
          <li>Light Fittings</li>
          <li>Electrical Goods</li>
          <li>Civil Planning, Designing & Renovation</li>
        </ul>
        <div className="btn-part">
          <Link to="/estimation">
            <button>Get a estimation</button>
          </Link>
          <Link to={"/contact-member"}>
            <button>Contact a member</button>
          </Link>
          <Link to="/admin" target='_blank'>
            <button>Admin page</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services