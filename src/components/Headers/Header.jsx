import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchInput from "../Search/Search"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css'; 

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img 
          src="/assets/image.png" 
          alt="Logo Icon" 
          className={styles.logoIcon} 
        />
        <span className={styles.logoText}>
          Mana.id
        </span>
      </div>

      <div className={styles.searchContainer}>
        <SearchInput />
      </div>

      <Button 
        onClick={toggleMenu} 
        className={styles.menuButton}
        icon={isMenuOpen ? <FaTimes style={{ color: 'black', fontSize: '30px' }} /> 
                         : <FaBars style={{ color: 'black', fontSize: '30px' }} />}
      />

      <Drawer
        placement="left"
        onClose={toggleMenu}       
        width="250px"
        visible={isMenuOpen}
        className={styles.drawer}
        bodyStyle={{ padding: 0 }}
      >
        <div className={styles.drawerContent}>
          <ul className="list-unstyled">
            <li className={styles.drawerListItem}>
              <Link to="/" onClick={toggleMenu} className={styles.drawerLink}>Home</Link>
            </li>
            <li className={styles.drawerListItem}>
              <Link to="/cart" onClick={toggleMenu} className={styles.drawerLink}>Cart</Link>
            </li>
            <li className={styles.drawerListItem}>
              <Link to="/media" onClick={toggleMenu} className={styles.drawerLink}>Media</Link>
            </li>
            <li className={styles.drawerListItem}>
              <Link to="/inspiration" onClick={toggleMenu} className={styles.drawerLink}>Inspiration</Link>
            </li>
            <li className={styles.drawerListItem}>
              <Link to="/about" onClick={toggleMenu} className={styles.drawerLink}>About</Link>
            </li>
            <li className={styles.drawerListItem}>
              <Link to="/savedcontent" onClick={toggleMenu} className={styles.drawerLink}>Saved Content</Link>
            </li>
            <li className={styles.drawerListItem}>
              <Link to="/membership" onClick={toggleMenu} className={styles.drawerLink}>Membership</Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Headers;