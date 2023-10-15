import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { useDispatch } from 'react-redux'
import { carousal } from '../../Redux/AllSlice/User'
import CompletedProject from '../CompletedProject/CompletedProject'
import './Home.css'


const Home = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  useEffect(() => {
    dispatch(carousal())
      .then(ress => {
        // console.log("Res :", ress);
        setImage(ress.payload);
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <div className="home">
        {/* <img src="../../../../assets/masterone.jpg" alt="" /> */}
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          emulateTouch={true}
        >
          { image.map(muiCarousel => (
            <div key={muiCarousel.id}>
              <img src={muiCarousel.carousel} alt='' />
            </div>
          ))}
        </Carousel>
      </div>

      <CompletedProject />
    </div>
  )
}

export default Home