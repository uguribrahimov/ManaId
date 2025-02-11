import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './FooterBottom.module.css';

const FooterBottom = () => {
  return (
    <footer className={`bg-dark text-light py-4 ${styles.footerContainer}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className={styles.footerTitle}>Mana.id</h5>
            <p className={styles.footerDescription}>
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="form-control" 
              />
              <button className="btn btn-primary" type="button">
                <span className={styles.emailIcon}>📧</span>
              </button>
            </div>
            <p className="small text-muted mt-3">
              By subscribing you agree to with our <a href="/privacy-policy" className="text-primary">Privacy Policy</a>.
            </p>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li><a href="/ai-interior-assistant" className="text-secondary">Product</a></li>
              <li><a href="/ai-interior-assistant" className="text-secondary">AI Interior Assistant</a></li>
              <li><a href="/collection" className="text-secondary">Collection</a></li>
              <li><a href="/inspiration" className="text-secondary">Inspiration</a></li>
              <li><a href="/blog" className="text-secondary">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li><a href="/about" className="text-secondary">Company</a></li>
              <li><a href="/about" className="text-secondary">About</a></li>
              <li><a href="/privacy-policy" className="text-secondary">Privacy Policy</a></li>
              <li><a href="/support" className="text-secondary">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
          <p className="mb-0">©2023 Liner. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="https://www.instagram.com" className="text-dark bg-light p-2 rounded"><FaInstagram /></a>
            <a href="https://www.twitter.com" className="text-dark bg-light p-2 rounded"><FaTwitter /></a>
            <a href="https://www.facebook.com" className="text-dark bg-light p-2 rounded"><FaFacebook /></a>
            <a href="https://www.linkedin.com" className="text-dark bg-light p-2 rounded"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
