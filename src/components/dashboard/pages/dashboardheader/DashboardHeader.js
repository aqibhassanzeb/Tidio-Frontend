import React, { useState } from "react";
import "../dashboardheader/DashboardHeader.css";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { GiMatterStates } from "react-icons/gi";
import { RiContactsBook2Line } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import UserImage from "../../../../images/user.webp";
import Profile from "./profile/Profile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function DashboardHeader() {
  const loginUser = useSelector((state) => state.User.activeUser);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("ONLINE");
  const [onlineMode, setOnlineMode] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="" style={{ borderBottom: "1px solid lightgray" }}>
        <Navbar.Brand
          href="#home"
          className=" d-flex justify-content-center align-items-center"
        >
          <HiHome className="dashbdicon" onClick={() => navigate("/")} />
          Dashboard
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="d-flex justify-content-end ">
          <Navbar.Text className="naviconbar ">
            {/*  <MdOutlineContactSupport className='statsicon' />
                        <RiContactsBook2Line className='statsicon' />
                         <GiMatterStates className='statsicon ' /> */}
                         <div className=" w-75 d-flex justify-content-around align-items-center">
            <button className=" upgradebtn">Upgrade</button>
            <img
              className="user_img"
              alt="user"
              src={loginUser?.imageUrl ? process.env.REACT_APP_API_URL_IMG+loginUser?.imageUrl: UserImage}
              onClick={() => setToggle(!toggle)}
            />
            <span className="textvalue ">
            {value=="ONLINE" ?  <GoPrimitiveDot /> : <GoPrimitiveDot className="textvalue2" />}
            </span>
            </div>
           
              <Profile
                setToggle={setToggle}
                value={value}
                setValue={setValue}
                toggle={toggle}
              />
           
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default DashboardHeader;
