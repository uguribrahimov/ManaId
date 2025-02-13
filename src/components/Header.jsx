import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <div className="position-relative d-flex align-items-center gap-2">
        <img src="../../public/assets/image.jpg" alt="Logo Icon" className="img-fluid" style={{ width: "40px", height: "40px" }} />
        <span className="fw-bold text-dark" style={{ fontSize: "1.2rem" }}>Mana.id</span>
      </div>

      <Button 
        onClick={toggleMenu} 
        style={{ 
          fontSize: 30, 
          position: "sticky",  
          top: '10px',  
          right: "0px", 
          zIndex: 1202,  
          display: "flex", 
          alignItems: "center",
          backgroundColor: 'white',
        }}
        icon={isMenuOpen ? (
          <FaTimes style={{ color: 'black', fontSize: '30px', padding: '5px' }} />
        ) : (
          <FaBars style={{ color: 'black', fontSize: '30px', padding: '5px' }} />
        )}
      />

      <Drawer
        placement="left"
        onClose={toggleMenu}       
        width="250px"
        visible={isMenuOpen}
        style={{
          backgroundColor: "#09222A",
        }}
      >
        <div className="bg-dark text-white p-3">
          <ul className="list-unstyled">
            <li className="mb-3">
              <Link to="/aiasistant" onClick={toggleMenu} className="text-white text-decoration-none">Ai Assistant</Link>
            </li>
            <li className="mb-3">
              <Link to="/cart" onClick={toggleMenu} className="text-white text-decoration-none">Cart</Link>
            </li>
            <li className="mb-3">
              <Link to="/media" onClick={toggleMenu} className="text-white text-decoration-none">Media</Link>
            </li>
            <li className="mb-3">
              <Link to="/inspiration" onClick={toggleMenu} className="text-white text-decoration-none">Inspiration</Link>
            </li>
            <li className="mb-3">
              <Link to="/about" onClick={toggleMenu} className="text-white text-decoration-none">About</Link>
            </li>
            <li className="mb-3">
              <Link to="/savedcontent" onClick={toggleMenu} className="text-white text-decoration-none">Saved Content</Link>
            </li>
            <li>
              <Link to="/membership" onClick={toggleMenu} className="text-white text-decoration-none">Membership</Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Headers;
