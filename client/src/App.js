import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashBoard/Dashboard";
import Conference from "./pages/conference/Conference";
import HiringChallange from "./pages/hiringChallenge/HiringChallange";
import Internship from "./pages/internship/Internship";
import Workshop from "./pages/workshop/Workshop";
import Hackathon from "./pages/hackathon/Hackathon";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landingPage/LandingPage";
import Main from "./pages/main/Main";
import Developers from "./pages/developers/Developers";
import ContactUs from "./pages/contactUs/ContactUs";
import { UserContext } from "./utils/userContext";
import { magic } from "./utils/magic";
import Cookies from "js-cookie";
import { Toaster } from "react-hot-toast";
import Assistant from "./pages/assistant/Assistant";
import Scholarship from "./pages/scholarship/Scholarship";
import SupportAdmin from "./pages/livechat/SupportAdmin";
import Livechat from "./pages/livechat/Livechat";
import Success from "./pages/scholarship/donation/Success";
import Cancel from "./pages/scholarship/donation/Cancel";
import "@stripe/stripe-js"

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("App.js useEffect");
    // setUser({ loading: true });
    const init = async () => {
      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        console.log(isLoggedIn);
        if (isLoggedIn) {
          const userData = await magic.user.getMetadata();
          Cookies.set("user", userData);
          const idToken = await magic.user.getIdToken({
            lifespan: 24 * 60 * 60,
          });
          Cookies.set("token", idToken);
        }
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Toaster/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
            <Route path="/admin/secretkey/livechat" element={<SupportAdmin />} />
          <Route path="/main" element={<Sidebar />}>
            <Route path="/main/dashboard" element={<Dashboard />} />
            <Route path="/main/conference" element={<Conference />} />
            <Route path="/main/hiringChallange" element={<HiringChallange />} />
            <Route path="/main/internship" element={<Internship />} />
            <Route path="/main/workshop" element={<Workshop />} />
            <Route path="/main/hackathon" element={<Hackathon />} />
            <Route path="/main/assistant" element={<Assistant />} />
            <Route path="/main/livechat" element={<Livechat />} />
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
