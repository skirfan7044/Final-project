import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
const isAuth=window.sessionStorage.getItem( "authToken");
const isAuthAdmin=window.localStorage.getItem( "token");
// console.log("Value of isAuth: ",isAuth);
return isAuth || isAuthAdmin ? <Outlet/> : <Navigate to ="/login" />;
 };

export default ProtectedRoutes;