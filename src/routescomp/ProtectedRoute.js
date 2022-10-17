import React from 'react'
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import Login from '../components/login/Login';

const authFunc=()=>{
    var user = JSON.parse(localStorage.getItem("user"))
    var usertoken = localStorage.getItem("token")
    return user && usertoken
}
const ProtectedRoute = () => {
    const isAuthentic=authFunc();
    return isAuthentic ? <Outlet/> : <Navigate to="/userlogin" />
}

export default ProtectedRoute