import React,{useEffect} from "react";
import { Outlet,useNavigate} from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

const TOKEN_NAME = process.env.REACT_APP_TOKEN_NAME;

export default function Admin() {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem(TOKEN_NAME);

    token === null && navigate("/");
    return;
  },[])
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
         <Outlet/>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
