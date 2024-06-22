import { Link } from "react-router-dom"
import React, { useState } from 'react';
import './navigation.css'

export default function Navigation() {

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  return (
    
    <div>
    <nav>
      
      <ul>
      
        <li>
          <Link to="/" className={`link ${activeLink === '/' ? 'active-link' : ''}`}
          onClick={() => handleLinkClick('/')}>Home</Link>
        </li>
        <li>
          <Link to="/form" className={`link ${activeLink === '/form' ? 'active-link' : ''}`}
          onClick={() => handleLinkClick('/form')}>Traiter</Link>
        </li>
        {/* <li>
          <Link to="/about">about us</Link>
        </li>
        <li>
          <Link to="/Chart">Chart</Link>
        </li>
        <li>
          <Link to="/Team">Team</Link>
        </li>
         */}

      </ul>
    </nav>
    </div>
  )
}
