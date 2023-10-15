import React, { useEffect } from 'react'
import './Gallery.css'
import AOS from 'aos';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="imgbox" data-aos="fade-up">
        <h2>Master Bedroom</h2>
        <img src="../../../../assets/bedroom1.jpg" alt="" />
        <img src="../../../../assets/bedroom2.jpg" alt="" />
        <img src="../../../../assets/bedroom3.jpg" alt="" />
        <img src="../../../../assets/bedroom4.jpg" alt="" />
      </div>

      <div className="imgbox" data-aos="fade-up">
        <h2>Living area</h2>
        <img src="../../../../assets/living1.jpg" alt="" />
        <img src="../../../../assets/living2.jpg" alt="" />
        <img src="../../../../assets/living3.jpg" alt="" />
        <img src="../../../../assets/living4.jpg" alt="" />
      </div>

      <div className="imgbox" data-aos="fade-up">
        <h2>Kitchen area</h2>
        <img src="../../../../assets/kitchen1.jpg" alt="" />
        <img src="../../../../assets/kitchen2.jpg" alt="" />
        <img src="../../../../assets/kitchen3.jpg" alt="" />
        <img src="../../../../assets/kitchen4.jpg" alt="" />
      </div>

      <div className="imgbox" data-aos="fade-up">
        <h2>Dining area</h2>
        <img src="../../../../assets/dining1.jpg" alt="" />
        <img src="../../../../assets/dining2.jpg" alt="" />
        <img src="../../../../assets/dining3.jpg" alt="" />
        <img src="../../../../assets/dining4.jpg" alt="" />
      </div>

      <div className="imgbox" data-aos="fade-up">
        <h2>Home Office</h2>
        <img src="../../../../assets/office1.jpg" alt="" />
        <img src="../../../../assets/office2.jpg" alt="" />
        <img src="../../../../assets/office3.jpg" alt="" />
        <img src="../../../../assets/office4.jpg" alt="" />
      </div>

      <div className="imgbox" data-aos="fade-up">
        <h2>Washroom</h2>
        <img src="../../../../assets/washroom4.jpg" alt="" />
        <img src="../../../../assets/washroom2.jpg" alt="" />
        <img src="../../../../assets/washroom3.jpg" alt="" />
        <img src="../../../../assets/washroom1.jpg" alt="" />
      </div>

      <div className="imgbox" data-aos="fade-up">
        <h2>2D plan layout</h2>
        <img src="../../../../assets/2d1.jpg" alt="" />
        <img src="../../../../assets/2d2.jpg" alt="" />
        <img src="../../../../assets/2d3.jpg" alt="" />
        <img src="../../../../assets/2d4.jpg" alt="" />
      </div>
    </div>
  )
}

export default Gallery