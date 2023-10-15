import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
const isAuth=window.sessionStorage.getItem( "authToken")
// console.log("Value of isAuth: ",isAuth);
return isAuth? <Outlet/> : <Navigate to ="/login" />;
 };

export default ProtectedRoutes;