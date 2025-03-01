import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './FooterBottom.module.css';

const FooterBottom = () => {
  return (
    <footer className={`bg-dark text-light py-4 ${styles.footerContainer}`}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mb-3 mb-md-0 d-flex flex-column justify-content-between">
            <div>
              <h5 className={`${styles.footerTitle} ${styles.smallText}`}>Mana.id</h5>
              <p className={`${styles.footerDescription} ${styles.smallText}`}>
                Xüsusiyyətlər və yeniliklər haqqında xəbərdar olmaq üçün bülletenimizə abunə olun.
              </p>
            </div>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="E-poçtunuzu daxil edin" 
                className="form-control" 
              />
              <button className="btn btn-light" type="button">
                <span className={styles.emailIcon}>📧</span>
              </button>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-around">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/ai-interior-assistant" className="text-secondary">Məhsul</a></li>
              <li className="mb-2"><a href="/ai-interior-assistant" className="text-secondary">AI Daxili Dizayn Köməkçisi</a></li>
              <li className="mb-2"><a href="/collection" className="text-secondary">Kolleksiya</a></li>
              <li className="mb-2"><a href="/inspiration" className="text-secondary">İlham</a></li>
              <li className="mb-2"><a href="/blog" className="text-secondary">Bloq</a></li>
            </ul>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/about" className="text-secondary">Şirkət</a></li>
              <li className="mb-2"><a href="/about" className="text-secondary">Haqqımızda</a></li>
              <li className="mb-2"><a href="/privacy-policy" className="text-secondary">Məxfilik siyasəti</a></li>
              <li className="mb-2"><a href="/support" className="text-secondary">Dəstək</a></li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
          <p className="mb-0">©2023 Liner. Bütün hüquqlar qorunur.</p>
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
