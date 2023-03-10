import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

import { RiLockPasswordFill }from "react-icons/ri";
import { FaFemale, FaHandHoldingHeart, FaSearch }from "react-icons/fa";
import { MdVerifiedUser }from "react-icons/md";

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Dashboard from '../dashBoard/Dashboard';
import Testimonial from '../../components/testimonial/Testimonial';
import Cookies from 'js-cookie';
import Girl3 from "../../assets/images/girl13.jpg"
import Girl2 from "../../assets/images/girl11.jpeg"
import Girl5 from "../../assets/images/girl15.jpg"
import Girl4 from "../../assets/images/girl14.jpg"
import Girl from "../../assets/images/girl2.jpg"
import Girl6 from "../../assets/images/girl16.jpg"
import companyLogo1 from "../../assets/images/company-logo1.png"
import companyLogo2 from "../../assets/images/company-logo2.png"
import companyLogo3 from "../../assets/images/company-logo3.png"
import companyLogo4 from "../../assets/images/company-logo4.png"
import companyLogo5 from "../../assets/images/company-logo5.png"
import companyLogo6 from "../../assets/images/company-logo6.png"
import companyLogo7 from "../../assets/images/microsoft-logo.png"

import service1 from "../../assets/images/service1.png"
import service2 from "../../assets/images/service2.svg"
import service3 from "../../assets/images/service3.png"
import service4 from "../../assets/images/service4.png"
import service5 from "../../assets/images/service5.png"
import service6 from "../../assets/images/service6.png"
import service7 from "../../assets/images/service7.png"
import service8 from "../../assets/images/service8.png"

import whyShework from "../../assets/images/whyshework.svg"

import mentor1 from "../../assets/images/mentor3.png"
import mentor2 from "../../assets/images/mentor6.png"
import mentor3 from "../../assets/images/mentor5.png"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landingPage">
        {/* ============================  Landing Page  ============================= */}
        <div className="landingPage-main">
          <div className="left">
            <div className="landing-desc">
              <p>LADIES, ARE YOU MISSING OPPORTUNITIES ?</p>
              <p>Climb the Career Ladder on <span>SheGrows </span></p>
              <p>SheGrows is the premier job portal for women, offering a wide range of job opportunities in a variety of industries. Our mission is to empower women in the workforce by connecting them with female-friendly employers and providing resources for career advancement. </p>
            </div>
            <div className="start-btn">
              {Cookies.get('token') ? (
                <>
                  <NavLink
                    to="/main/dashboard"
                    key={<Dashboard />}
                    className="nav-link"
                  >
                    <p>Get Started</p>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    key={<Dashboard />}
                    className="nav-link"
                  >
                    <p>Get Started</p>
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div className="right">
            <div className="col1">
              <div className="col1"></div>
              <div className="col2"> <img src={Girl3} alt="" className='dddd'/>
                <div className="col12-icon col-icon-common"><FaFemale/></div>
              </div>
              <div className="col3"></div>
            </div>
            <div className="col2">
              <div className="col1"><img src={Girl2} alt="" /></div>
              <div className="col2"><img src={Girl5} alt="" /></div>
              <div className="col3"><img src={Girl4} alt="" /></div>
            </div>
            <div className="col3">
              <div className="col1"><img src={Girl} alt="" />
                <div className="col31-icon col-icon-common"><MdVerifiedUser/></div>
              </div>
              <div className="col2"><img src={Girl6} alt="" />
                <div className="col32-icon col-icon-common"><FaSearch/></div>
              </div>
              <div className="col3"></div>
            </div>
          </div>
        </div>

        {/* ==========================  Company Logo Section  ========================== */}
        <div className="companylogo">
          <div className="companylogo-main">
            <img src={companyLogo1} alt="" />
            <img src={companyLogo2} alt="" />
            <img src={companyLogo3} alt="" />
            <img src={companyLogo4} alt="" />
            <img src={companyLogo5} alt="" />
            <img src={companyLogo6} alt="" />
            <img src={companyLogo7} alt="" />
          </div>
        </div>
      </div>


      {/* ================================  Our Service  ================================ */}
      <div className="ourservice">
        <div className="our-service-main">
          <div className="service-heading">
            <p>Our Service </p>
          </div>
          <div className="service-desc">
            <div className="service-desc-1 service-common">
              <div className="image">
                <img src={service1} alt="" />
              </div>
              <div className="heading">
                <p>AI Assistant</p>
              </div>
              <div className="desc">
                Atom is an AI assistant build with help of openai api which provides you 2 different services. This ai bot is super powerful and can present you with perfect results within a thanos's snap.
              </div>
            </div>
            <div className="service-desc-2 service-common">
              <div className="image">
                <img src={service2} alt="" />
              </div>
              <div className="heading">
                <p>One-2-One Mentorship</p>
              </div>
              <div className="desc">
                Mentors from all big tech companies (Faang Companies) are here to assist you in your needs. You will be provided personalized chatting with them.
              </div>
            </div>
            <div className="service-desc-3 service-common">
              <div className="image">
                <img src={service3} alt="" />
              </div>
              <div className="heading">
                <p>5 Category Job Listing</p>
              </div>
              <div className="desc">
                To eliminate crowding, we have separated our job listing into 5 different categories i.e, hackathons, internships, workshops, hirings and conferences.
              </div>
            </div>
            <div className="service-desc-4 service-common">
              <div className="image">
                <img src={service4} alt="" />
              </div>
              <div className="heading">
                <p>Bookmarking and Filtering Jobs</p>
              </div>
              <div className="desc">
                To come and see later the job postings, we have introduced the bookmark function to save for later use also the filtering option to filter the jobs by their titles.
              </div>
            </div>
            <div className="service-desc-5 service-common">
              <div className="image">
                <img src={service5} alt="" />
              </div>
              <div className="heading">
                <p>Scholarship</p>
              </div>
              <div className="desc">
                We are raising funds from different people all over the world to give the underpreviledged girls a proper guidance and shine in the tech field.
              </div>
            </div>
            <div className="service-desc-6 service-common">
              <div className="image">
                <img src={service6} alt="" />
              </div>
              <div className="heading">
                <p>Passwordless Login</p>
              </div>
              <div className="desc">
                Remembering passwords for each and every other websites is a very hectic task, thats why SheGrows have brought you the passwordless authentication.
              </div>
            </div>
            <div className="service-desc-7 service-common">
              <div className="image">
                <img src={service7} alt="" />
              </div>
              <div className="heading">
                <p>Get Notified</p>
              </div>
              <div className="desc">
                Whenever there will be any new job coming in our website, you will be notified through your email so that you don't miss any opportunity.
              </div>
            </div>
            <div className="service-desc-8 service-common">
              <div className="image">
                <img src={service8} alt="" />
              </div>
              <div className="heading">
                <p>24/7 Technical Support</p>
              </div>
              <div className="desc">
                If anybody faces any technical issue with our website, we are here to give backup and are available 24*7 hours online with all our tech team (just fill the contact form).
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* ================================  Why SheGrows  ================================= */}
      <div className="whyshework">
        <div className="whyshework-main">
          <div className="left">
            <div className="heading">
              <p>Reasons for choosing us</p>
              <p>Why SheGrows ?</p>
            </div>
            <div className="all-reasons">
              <div className="reason1 reason-common">
                <div className='heading'>
                  <p> <RiLockPasswordFill/><span>Passwordless Authentication</span> </p>
                </div>
                <div className="desc">
                  <p>Passwordless authentication is an authentication method in which a user can log in to any particular product or system without entering (and having to remember) a password or any other knowledge-based secret. SheGrows provides you with this feature which will help the users to login to their profile seamlessly by eliminating the forget password process from the system. </p>
                </div>
              </div>
              <div className="reason2 reason-common">
                <div className='heading'>
                  <p> <FaFemale/><span>Female Oriented Jobs</span> </p>
                </div>
                <div className="desc">
                  <p>We are the first one to come up with the onestop job portal only for the females. Here all the jobs which are listed are at first verified by our very own recruiters to eliminate false listings and we are providing the job listings under 5 main criteria i.e, Conferences, Hackathons, Hirings, Internships and Workshops. </p>
                </div>
              </div>
              <div className="reason2 reason-common">
                <div className='heading'>
                  <p> <FaHandHoldingHeart/><span>Supporting Underprivileged</span> </p>
                </div>
                <div className="desc">
                  <p>Since we are non-profit organization, we are raising funds to directly help those female childrens who are not able to pursue their career in tech due to financial or any other reasons. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={whyShework} alt="" />
          </div>
        </div>
      </div>



      {/* ===============================  What Mentor Says  ============================== */}
      <div className="ourmentor">
        <div className="ourmentor-main">
          <div className="heading">
            <p>What our Mentor says ?</p>
          </div>
          <div className="mentor-quote">
            <div className="quote1">
              <div className="image">
                <img src={mentor1} alt="" />
              </div>
              <div className="quote-desc">
                <p> Make sure your LinkedIn profile is up-to-date and that you have a portfolio of your work online. This will make it easy for recruiters to find you and learn about your skills and experience. </p>
              </div>
              <div className="mentor-desc">
                <p>Isabella Anderson</p>
                <p>Recruiter</p>
              </div>
            </div>
            <div className="quote1">
              <div className="image">
                <img src={mentor3} alt="" />
              </div>
              <div className="quote-desc">
                <p>Be proactive and persistent. Reach out to companies you're interested in working for and let them know you're available. Follow up with recruiters after you've applied for a job to check on the status of your application and express your continued interest in the position.</p>
                
              </div>
              <div className="mentor-desc">
                <p>Brittany Thompson</p>
                <p>Hiring Manager</p>
              </div>
            </div>
            <div className="quote1">
              <div className="image">
                <img src={mentor2} alt="" />
              </div>
              <div className="quote-desc">
                <p>Networking is key. The more connections you have in your industry, the more likely you are to hear about job opportunities and get your foot in the door at a good company.</p>
              </div>
              <div className="mentor-desc">
                <p>Melissa Garcia</p>
                <p>Hiring Manager</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>



        {/* =================================  TESTIMONIAL  ============================= */}
        <Testimonial />
        



        {/* =================================  FOOTER  =================================== */}
        <Footer />












        {/* <p className="short-heading">
          Girl, are you Missing the opportunities because of the lack of
          awareness ?
        </p>
        <p className="main-heading">
          Don't worry, she-works is the onestop platform
        </p> */}


    </>
  );
};

export default LandingPage;
