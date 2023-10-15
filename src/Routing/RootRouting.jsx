import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Services from '../Components/Services/Services'
import About from '../Components/About/About'
import Header from '../Layout/Header/Header'
import Contact from '../Components/Contact/Contact'
import PNF from '../Layout/PNF/PNF'
import Gallery from '../Components/Gallery/Gallery'
import Footer from '../Layout/Footer/Footer'
import AddCompleted from '../Components/Crud/Add/AddCompleted'
import RemoveCompleted from '../Components/Crud/Remove/RemoveCompleted'
import Admin from '../Components/Admin/Admin'
import ContactView from '../Components/Crud/Submission/ContactSubmission/ContactView'
import EstimationView from '../Components/Crud/Submission/EstimationSubmission/EstimationView'
import ContactPending from '../Components/Crud/Pending/ContactPending/ContactPending'
import Estimation from '../Components/Estimation/Estimation'
import EstimationPending from '../Components/Crud/Pending/EstimationPending/EstimatationPending'
import ProtectedRoutes from './ProtectedRoutes'
import CreateAccount from '../Components/CreateAccount/CreateAccount'
import Login from '../Components/Login/Login'
import ContactMember from '../Components/ContactMember/ContactMember'

const RootRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='about-us' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='create-account' element={<CreateAccount />} />
          <Route path='add-completed-project' element={<AddCompleted />} />
          <Route path='remove-completed-project' element={<RemoveCompleted />} />
          <Route path='admin' element={<Admin />} />
          <Route path='contact-view' element={<ContactView />} />
          <Route path='contact-confirm/:cid' element={<ContactPending />} />
          <Route path='estimation-view' element={<EstimationView />} />
          <Route path='estimation-confirm/:eid' element={<EstimationPending />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='contact-member' element={<ContactMember />} />
            <Route path='estimation' element={<Estimation />} />
          </Route>

          <Route path='*' element={<PNF />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default RootRouting