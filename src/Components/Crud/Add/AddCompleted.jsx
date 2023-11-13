import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postCompleted } from '../../../Redux/AllSlice/User';
import './AddCompleted.css'

const AddCompleted = () => {
  const dispatch=useDispatch();
  const [inputState, setInput] = useState({
    client_name: "",
    client_address: "",
  });
  const [image1, setImage1] = useState({});
  const [image2, setImage2] = useState({});
  const [image3, setImage3] = useState({});
  const [image4, setImage4] = useState({});

  let changehandeler = (event) => {
    event.persist();
    let { name, value } = event.target
    setInput({ ...inputState, [name]: value });
  }

  const changehandeler1 = (e) => {
    // console.log(e.target.files);
    const data = new FileReader();
    data.addEventListener('load', () => {
      setImage1(data.result);
    })
    data.readAsDataURL(e.target.files[0])
  }

  const changehandeler2 = (e) => {
    // console.log(e.target.files);
    const data = new FileReader();
    data.addEventListener('load', () => {
      setImage2(data.result);
    })
    data.readAsDataURL(e.target.files[0])
  }

  const changehandeler3 = (e) => {
    // console.log(e.target.files);
    const data = new FileReader();
    data.addEventListener('load', () => {
      setImage3(data.result);
    })
    data.readAsDataURL(e.target.files[0])
  }

  const changehandeler4 = (e) => {
    // console.log(e.target.files);
    const data = new FileReader();
    data.addEventListener('load', () => {
      setImage4(data.result);
    })
    data.readAsDataURL(e.target.files[0])
  }

  const submitHandeler = (event) => {
    event.preventDefault();
    const detail = {
      bedroom: image1,
      living: image2,
      kitchen: image3,
      dining: image4,
      client_name: inputState.client_name,
      client_address: inputState.client_address,
  }
  dispatch(postCompleted(detail))
  }
  return (
    <div className="addform">
      <div className="contact-form">
        <form onSubmit={submitHandeler}>
          <h1>Completed project</h1>
          <label htmlFor="image1">Bedroom </label>
          <input type="file" name='image1' id='image1' onChange={changehandeler1} />

          <label htmlFor="image2">Living </label>
          <input type="file" name='image2' id='image2' onChange={changehandeler2} />

          <label htmlFor="image3">Kitchen </label>
          <input type="file" name='image3' id='image3' onChange={changehandeler3} />

          <label htmlFor="image4">Dining </label>
          <input type="file" name='image4' id='image4' onChange={changehandeler4} />

          <input type="text" name='client_name' id='client_name' placeholder='Enter client name' onChange={changehandeler} />
          <input type="text" name='client_address' id='client_address' placeholder='Enter client address' onChange={changehandeler} />

          <input type="submit" id='submit' value="Submit" />

        </form>
      </div>
    </div>
  )
}

export default AddCompleted