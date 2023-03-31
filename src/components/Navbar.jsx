import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import '../pages/home.css';

const Navbar = () => (
  <nav className="navbar">
    <div>
      <Link to="/"><IoIosArrowBack className="icon" /></Link>
    </div>
    <h1>Crypto World</h1>
    <div className="icon-container">
      <BsFillMicFill className="icon" />
      <IoMdSettings className="icon" />
    </div>
  </nav>
);

export default Navbar;
