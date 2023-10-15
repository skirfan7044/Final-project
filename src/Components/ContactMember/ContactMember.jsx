import React from 'react'
import './ContactMember.css'

const ContactMember = () => {
    return (
        <>
            <div className="t-head">
                <h2>Our Team Members</h2>
                <h2>Please Contact Between - 9am to 7pm</h2>
            </div>
            <div className="parentcon">
                <div className="childcon">
                    <img src='../../../assets/akash.jpg' alt="" />
                    <h3><b>Name:</b> Akash sen</h3>
                    <h4><b>Language known -</b>  English & Bengali</h4>
                    <h4><b>Contact no.-</b>  +916254789687</h4>
                </div>
                <div className="childcon">
                    <img src="../../../assets/puja.jpg" alt="" />
                    <h3><b>Name:</b> Puja Roy </h3>
                    <h4><b>Language known -</b> Bengali & Hindi</h4>
                    <h4><b>Contact no.-</b> +916254589685</h4>
                </div>
                <div className="childcon">
                    <img src="../../../assets/ajay.jpg" alt="" />
                    <h3><b>Name:</b> John Gates</h3>
                    <h4><b>Language known -</b> English & Tamil</h4>
                    <h4><b>Contact no.-</b>+918544589654</h4>
                </div>
                <div className="childcon">
                    <img src="../../../assets/mark.jpg" alt="" />
                    <h3><b>Name:</b>  St. Mark</h3>
                    <h4><b>Language known -</b>  English & Telgu</h4>
                    <h4><b>Contact no.-</b> +916257859645</h4>
                </div>
            </div>
        </>
    )
}

export default ContactMember