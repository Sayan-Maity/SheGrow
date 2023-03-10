import React, { useRef, useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';

import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import Developers from '../../pages/developers/Developers'
import ContactUs from '../../pages/contactUs/ContactUs'
import logo from "../../assets/images/logo3.png";
import { magic } from "../../utils/magic";

import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import LandingPage from '../../pages/landingPage/LandingPage';
import Cookies from 'js-cookie';
import Axios from "axios";
import { UserContext } from '../../utils/userContext';
import Scholarship from "../../pages/scholarship/Scholarship";
import Dashboard from "../../pages/dashBoard/Dashboard";

const Navbar = () => {
    const navRef = useRef();
    const location = useLocation();
    const [user, setUser] = useContext(UserContext)
    const [profile, setProfile] = useState({});

    useEffect(() => {
      async function call() {
        try {
          let resp = await Axios.get(
            process.env.REACT_APP_SERVER_URL + "/dashboard",
            {
              headers: {
                Authorization: "Bearer " + Cookies.get("token"),
              },
            }
          );
          setProfile(resp.data);
          // console.log(resp.data);
        } catch (err) {
          console.log(err);
        }
      }
      call();
    }, []);
    // console.log(magic.user.isLoggedIn())

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    // change nav links color and background-color when scrolling :
    // const [bgcolor, setBgcolor] = useState(false)
    // const [color, setColor] = useState(false)
    // const changeBgcolor = () => {
    //     if(window.scrollY >= 100) {
    //         setBgcolor(true)
    //         setColor(true)
    //     } else {
    //         setBgcolor(false)
    //         setColor(false)
    //     }
    // }

    // window.addEventListener('scroll', changeBgcolor)

    return (
      

        <>
        
    <header >
      <div className="nav-logo"><img src={logo} alt="SheWorks" className='logo'/></div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars className='fa-bars'/>
			</button>
			<nav ref={navRef}>
                <li className="nav-links">
                  <NavLink to="/" key={<LandingPage/>} className={location.pathname === '/' ? 'active-select' : 'nav-main-links'} ><p>HOME</p></NavLink>
                </li>
                <li className="nav-links">
                  <NavLink to="/scholarship" key={<Scholarship/>} className={location.pathname === '/scholarship' ? 'active-select' : 'nav-main-links'} ><p>Scholarship</p></NavLink>

                </li>
                <li className="nav-links">
                  <NavLink to="/developers" key={<Developers/>} className={location.pathname === '/developers' ? 'active-select' : 'nav-main-links'} ><p>Developers</p></NavLink>

                </li>
                <li className="nav-links">
                  <NavLink to="/contact" key={<ContactUs/>} className={location.pathname === '/contact' ? 'active-select' : 'nav-main-links'} ><p>Contact US</p></NavLink>

                </li>
                {Cookies.get("token")?
                <NavLink to="/main/dashboard" key={<Dashboard/>}>
                <span className="navbar-username">
                  <div className="navbar-avatar"></div>
                  <div className="navbar-profile-desc">
                    <div className="navbar-profile-name">{profile.firstname}</div>
                    <div className="navbar-profile-profession">{profile.profession}</div>
                  </div>
                </span> 
                </NavLink>:
                (
                  <>
                    <li className="nav-links">
                        <NavLink to="/login" key={<Login />} className='nav-main-links'><p>Login</p></NavLink>
                    </li>
                    <li className="nav-links">
                        <NavLink to="/register" key={<Register />}  className='nav-main-links' ><p>Register</p></NavLink>
                    </li>
                  </>
                )}
        <>
        <div className="back-menu"></div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
        </>
			</nav>
		</header>
    </>
  )
}

export default Navbar
