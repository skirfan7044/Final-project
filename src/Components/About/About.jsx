import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos'

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="headp">
      <img src="../../../../assets/thirdvieww.jpg" alt="" />
      <div className="content" data-aos="fade-up">
        <h1>About us</h1>
        <div className="c2">
          <h4>
            Interior designing of one's home is a more than just setting up some furniture across a few rooms painted in colors of your choice. The interior design and setup of your home is a significant aspect of how you would want to lead your life. Every inch of where you live must exude the vibrancy of your and your family's character.
          </h4>

          <h4>
            Established in the year 2021 we at RM Interior ensure best quality services at efficient rates. As an interior design firm with over 2 years of experience, our team is known to take an in depth analysis of your requirements and then design the setup in question just the way you want it. Instead of just placing going ahead, our team acts as advisors and tells you the pros and cons of the initially planned design.
          </h4>

          <h4>
            We are one of the few design studios in the country that provides the essence of luxury living at value for money costs. This along with the expectations of the owner are fused and a detailed pan and design walk through is setup for the customer.
          </h4>
          
        </div>
        <div className="c3">
          <h2>Our office branches</h2>
          <h3 className="head1">Kolkata</h3>
          <h3 className="head2">Delhi</h3>
          <h3 className="head3">Mumbai</h3>
          <h3 className="head4">Bengalore</h3>
        </div>

      </div>
    </div>
  )
}

export default About