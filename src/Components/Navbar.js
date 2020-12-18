import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {Row,Col} from "react-bootstrap";
import './actions'
import Button from 'react-bootstrap/Button'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#18287b' }}>
        <div className='navbar'>
          <Row className = "w-100">
          <Col xs = {2}><Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
               </Link>
          </Col>
          <Col xs = {8} ><Link to='#' className='setting float-right'>
          <MdIcons.MdSettings/>
              </Link>
          </Col>
          <Col>
          <Link to='#' className='setting float-right'>
            <MdIcons.MdNotifications/>
          </Link>
          </Col>
          <Col>
          <Button>
            hi
          </Button>
          </Col>
          </Row>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Row className="p-3 text-black" noGutters={true}>
                <Col className="pl-3 .bg-primary" >logo</Col>
                <Col >Finacular</Col>
                <Col > 
                <Link to='#' className='menu-bars fs-small pl-3'>
                <FaIcons.FaLessThan />
              </Link>
                </Col>
              </Row>
              
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;