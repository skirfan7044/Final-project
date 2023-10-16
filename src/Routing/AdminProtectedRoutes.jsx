import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const AdminProtectedRoutes = () => {
const isAuth=window.localStorage.getItem( "authToken");
// console.log("Value of isAuth: ",isAuth);
return isAuth ? <Outlet/> : <Navigate to ="/*" />;
 };

export default AdminProtectedRoutes;