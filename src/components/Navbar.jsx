import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';

const Navbar = () => (
  <nav>
    <div>
      <Link to="/"><IoIosArrowBack /></Link>
    </div>
    <div>
      <BsFillMicFill />
      <IoMdSettings />
    </div>
  </nav>
);

export default Navbar;
