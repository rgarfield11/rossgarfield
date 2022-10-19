import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button 
              onClick={() => {
                setExpandNavbar((prev) => !prev);
              }}
            >
              <ReorderIcon /> 
            </button>
        </div>
        <div className='links'>
            <Link className="link-tabs" to='/rossgarfield'> Home </Link>
            <Link className="link-tabs" to='/projects'> Projects </Link>
            <Link className="link-tabs" to='/experience'> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar