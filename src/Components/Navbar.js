import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    props.setSideBar(sidebar);
  }, [sidebar]);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#18287b" }}>
        <div className="navbar">
          <Row className="w-100 ">
            <Col xs={2}>
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </Col>
            <Col xs={8}>
              <Link
                to="#"
                className=" fs-1_5 setting float-right border-right border-left pl-3 pr-3 "
              >
                <MdIcons.MdSettings />
              </Link>
            </Col>
            <Col>
              <Link to="#" className="notification pt-1 no-gutters pl-2 ">
                <MdIcons.MdNotifications />
              </Link>
            </Col>
            <Col>
              <Button style={{ backgroundColor: " #18287b" }}>Actions</Button>
            </Col>
          </Row>
        </div>
        <nav
          className={
            sidebar ? "nav-menu active z-index-2 border-right" : "nav-menu"
          }
        >
          <ul className="nav-menu-items " onClick={showSidebar}>
            <li className="navbar-toggle">
              <Row className="p-3 text-black" noGutters={true}>
                <Col className="pl-3 .bg-primary">logo</Col>
                <Col>Finacular</Col>
                <Col>
                  <Link to="#" className="menu-bars fs-small pl-3">
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
