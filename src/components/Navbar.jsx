import React from 'react';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <Link to="/"><IoIosArrowBack /></Link>
    </div>
    <BsFillMicFill />
    <IoMdSettings />
  </nav>
);

export default Navbar;
